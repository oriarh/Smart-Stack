const { Users, Question } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils.auth');

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
        },
        loggedInUser: async (parent, args, context) => {
            if (context.users) {
                return Users.findOne({ _id: context.users._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await Users.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await Users.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);

            return { token, user };
        },
        addQuestion: async (parent, { questionTitle, difficulty, questionText, answerText, username }) => {
            return await Question.create({ questionTitle, difficulty, questionText, answerText, username });
        }
    }
};

module.exports = resolvers;