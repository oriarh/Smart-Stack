const router = require('express').Router();
const {
    getUsers,
    createUsers,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUsers);

module.exports = router;