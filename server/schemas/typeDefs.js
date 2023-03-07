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
        users: Users
    }

    type Query {
        users: [Users]
        question(questionId: ID!): Question
        allQuestions: [Question]
        favorites: [Question]
        loggedInUser: Users
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addQuestion(questionTitle: String!, difficulty: String!, questionText: String!, answerText: String!, username: String): Question
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;