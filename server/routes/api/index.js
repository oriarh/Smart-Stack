const router = require('express').Router();
const userRouter = require('./userRoutes');
const questionRouter = require('./questionRoutes');

router.use('/users', userRouter);
router.use('/question', questionRouter);

module.exports = router;