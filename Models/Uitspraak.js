//dit is een model voor hoe je een quote zal opslaan

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//dit is het schema
const UitspraakSchema = mongoose.Schema({
    //attributen
    inhoud: {
        type: String,
        required: true
    },
    leerkracht: {
        type: String 
    },
    school: {
        type: String,
        required: true
    }
});

//exporteren voor gebruik in andere klasses, die het schema zullen gebruiken
const Uitspraak = module.exports = mongoose.model('Uitspraak', UitspraakSchema);

//functies voor de quotes te vinden, altijd beginnen met module.exports
module.exports.getQuoteById = function(id, callback){
    Uitspraak.findById(id, callback);
}

module.exports.findAlleUitspraken = function (callback){
    Uitspraak.find(callback);
}

module.exports.addUitspraak = function(newquote, callback){
            newquote.save(callback);
    };
