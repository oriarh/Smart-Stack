const { Users, Question } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await Users.find({}).populate('favorites');
        },
        question: async (parent, args) => {
            const { id } = args;
            return await Question.findById(id);
        }
    }
};

module.exports = resolvers;