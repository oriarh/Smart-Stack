const Question = require ('../models/product');

const mongoose = require ('mongoose');

const connection = require ('../config/connection');

const questions = [
    new Question ({
    questionTitle: "Binary Tree",
    difficulty: "Hard",
    questionText: "What is the max depth of a binary tree?",
    answerText: "The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node",
    

    })
]