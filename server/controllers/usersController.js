const { Users } = require('../models');
// const Users = require('../models');

module.exports = {
    getUsers(req, res) {
        Users.find()
        .select('-__v')
        .populate({
            path: "favorites",
            select: "-__v"
        })
        .then(async (users) => {
            const userObj = {
                users,
            };
            return res.json(userObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    createUsers(req, res) {
        Users.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    addQuestion(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: {favorites: req.params.questionId }},
            { new: true }
        )
        .then((newQuestion) => {
            if (!newQuestion) {
                res.status(404).json({ message: "No question with that ID" });
            }
            res.json(newQuestion);
        })
        .catch((err) => res.json(err));
    },
};