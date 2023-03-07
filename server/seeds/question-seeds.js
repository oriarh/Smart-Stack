const Question = require ('../models/product');

const mongoose = require ('mongoose');

const connection = require ('../config/connection');

const questions = [
    new Question ({
    questionTitle: "Binary Tree",
    difficulty: "Hard",
    questionText: "What is the max depth of a binary tree?",
    answerText: "The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node",
 }), 
]

//connect mongoose
mongoose
    .connect(String(dev.db), { useNewUrlParser: true })
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("connected to db in connection environment");
    });
//save data. this is an async operation

//after you make sure you seeded all the products, disconnect automatically
questions.map(async (p, index) => {
    await p.save((err, result) => {
        if (index === questions.length - 1) {
            console.log("DONE!");
            mongoose.disconnect();
        }
    });
});