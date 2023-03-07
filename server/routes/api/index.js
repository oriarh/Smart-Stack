const router = require('express').Router();
const userRouter = require('./userRoutes');
const questionRouter = require('./questionRoutes');

router.use('/users', userRouter);
router.use('/question', questionRouter);

module.exports = router;

const path = require("path"); // include this in the file

router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});