const router = require('express').Router();
const {
    getUsers,
    createUsers,
    addQuestion,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId/question/:questionId').post(addQuestion);

module.exports = router;