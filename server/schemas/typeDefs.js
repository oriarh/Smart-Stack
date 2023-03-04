const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Users {
        _id: ID
        username: String!
        email: String!
        password: String!
        favorites: [Question]
    }

    type Question {
        _id: ID!
        questionTitle: String!
        difficulty: String!
        questionText: String!
        answerText: String!
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [Users]
        question: [Question]
        allQuestions: [Question]
        favorites: [Question]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Users
        addQuestion(questionTitle: String!, difficulty: String!, questionText: String!, answerText: String!, username: String): Question
    }
`;

module.exports = typeDefs;