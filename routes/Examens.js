const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Examen = require('../Models/Examen');


router.post('/nieuweVraag', (req, res, next) => {

    let newExamenvraag = new Examen ({
        vraag: req.body.vraag, 
        vak: req.body.vak,
        academiejaar1: req.body.academiejaar1,
        academiejaar2: req.body.academiejaar2, 
        moeilijkheidsgraad: req.body.moeilijkheidsgraad,
        user: req.body.user
    });

    Examen.addExamenvraag(newExamenvraag, (err, quote) => {
        if(err){
            res.json({succes: false, msg:'Failed to make the new examenvraag'});
        } else {
            res.json({succes: true, msg:'De nieuwe examenvraag is aangemaakt'});
        }
    });
});

router.get('/overzicht',(req, res, next) => {
    let query = Examen.find();
    query.exec(function(err, examenvraags) {
        if (err) {
            return next(err);
          } 
          res.json(examenvraags)
    });
});

router.delete("/delete/:id", (req, res, next) => {
    Examen.remove({_id: req.params.id}).then(function(Examen){
        res.send(Examen);
    });
}); 

module.exports = router;