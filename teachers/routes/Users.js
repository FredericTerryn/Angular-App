const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../Models/User');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        Username: req.body.Username,
        password: req.body.password
    });

    User.addUser(newUser, (err, User) => {
        if(err)
        {
            res.json({succes: false, msg: 'failed to register User'});
        } else 
        {
            res.json({succes: true, msg: 'User registered'});
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const Username =  req.body.Username;
    const password = req.body.password;

    User.getUserByUsername(Username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({succes: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, IsMatch) => {
            if(err) throw err;
            if(IsMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    succes: true, 
                    token: 'JWT '+token, 
                    user: {
                        id: user._id,
                        name: user.name,
                        Username: user.Username,
                        email: user.email
                    }
                });
            } else {
                return res.json({succes: false, msg: 'Wrong password'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
