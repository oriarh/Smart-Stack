const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionTitle: {
        type: String,
        required: true,
        match: /^.{1,500}$/,
    },
    questionText: {
        type: String,
        required: true,
        match: /^.{1,5000}$/,
    },
    answerText: {
        type: String,
        required: true,
        match: /^.{1,5000}$/,
    },
    username: {
        type: String,
        required: true,
    }
    
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;