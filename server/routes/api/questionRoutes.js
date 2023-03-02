const router = require('express').Router();
const {
    getQuestion,
    createQuestion,
    getSingleQuestion,
} = require('../../controllers/questionController');

router.route('/').get(getQuestion).post(createQuestion);

router.route('/:questionId').get(getSingleQuestion);

module.exports = router;