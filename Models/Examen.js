
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ExamenvraagSchema = mongoose.Schema({
    vraag: {
        type: String, 
        required: true
    }, 
    vak: {
        type: String, 
        required: true
    }, 
    academiejaar1: {
        type: Number, 
        required: true
    }, 
    academiejaar2: {
        type: Number, 
        required: true
    }, 
    moeilijkheidsgraad: {
        type: String, 
        required: true
    }, 
    user: {
        type: Object, 
        required: true
    }
});

const Examen = module.exports = mongoose.model('Examenvraag', ExamenvraagSchema);

module.exports.addExamenvraag = function(newExamenvraag, callback){
    newExamenvraag.save(callback);
};