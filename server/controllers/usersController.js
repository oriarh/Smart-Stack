const { Users } = require('../models');

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
    
}