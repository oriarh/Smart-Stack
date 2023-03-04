const { Users, Question } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await Users.find({}).populate('favorites');
        },
        allQuestions: async () => {
            return await Question.find({});
        },
        question: async (parent, args) => {
            const { id } = args;
            return await Question.findById(id);
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return await Users.create({ username, email, password });
        },
        addQuestion: async (parent, { questionTitle, difficulty, questionText, answerText, username }) => {
            return await Question.create({ questionTitle, difficulty, questionText, answerText, username });
        }
    }
};

module.exports = resolvers;