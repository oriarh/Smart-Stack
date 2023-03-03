const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Users {
        _id: ID!
        username: String!
        email: String!
        password: String!
        favorites: [Question]
    }

    type Question {
        _id: ID!
        questionTitle: String!
        questionText: String!
        answerText: String!
        username: String
    }

    type Query {
        users: [Users]
        question: [Question]
        favorites: [Question]
    }
`;

module.exports = typeDefs;