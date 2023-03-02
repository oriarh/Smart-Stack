const { Question, Users } = require('../models');

module.exports = {
    getQuestion(req, res) {
        Question.find()
        .then(async (question) => {
            const questionObj = {
                question,
            };
            return res.json(questionObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    getSingleQuestion(req, res) {
        Question.findOne(
            { _id: req.params.questionId }
        )
        .then((question) => {
            if (!question) {
                res.status(404).json({ message: "No question with that ID"});
            }
            res.json({question});
        })
        .catch((err) => res.status(500).json(err));
    },

    createQuestion: async(req, res) => {
        let newQuestion = await Question.create({
            questionTitle: req.body.questionTitle,
            questionText: req.body.questionText,
            answerText: req.body.answerText,
            username: req.body.username
        })
        let newQuestionId = newQuestion._id;
        Users.findOneAndUpdate(
            {username: req.body.username},
            {$push: { question: newQuestionId }},
            {new: true}
        )
        .then((question) => res.json(question))
        .catch((err) => res.status(500).json(err));
    },
};