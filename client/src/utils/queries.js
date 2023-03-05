import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query users {
       users {
        _id
        username
        email
        favorites
       }
    }
`;

export const QUERY_QUESTION = gql`
    query question {
        quesiton {
            _id
            questionTitle
            difficulty
            questionText
            answerText
            username
        }
    }
`;

export const QUERY_LOGGEDINUSER = gql`
    query loggedInUser {
        loggedInUser{
            _id
            username
            email
        }
    }
`;