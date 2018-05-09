const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Uitspraak = require('../Models/Uitspraak');

// maak een nieuwe quote aan
router.post('/newuitspraak', (req, res, next) => {

   let newQuote = new Uitspraak ({
        inhoud: req.body.inhoud,
        leerkracht: req.body.leerkracht,
        school: req.body.school
    });

    Uitspraak.addUitspraak(newQuote, (err, quote) => {
        if(err){
            res.json({succes: false, msg:'Failed to make the new quote'});
        } else {
            res.json({succes: true, msg:'De nieuwe quote is aangemaakt'});
        }
    });
});

router.get('/overzicht',(req, res, next) => {
    let query = Uitspraak.find();
    query.exec(function(err, uitspraaks) {
        if (err) {
            return next(err);
          } 
          res.json(uitspraaks)
    });
});

module.exports = router;