import gql from 'graphql-tag';

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_SET = gql `
    mutation addSet($setName: String!){
        addSet(setName: $setName) {
            set {
                _id
                setName
                    card {
                    _id
                    question
                    answer
                }
            
            }
        }
    }
`

export const ADD_CARD = gql `
    mutation addCard($question: String!, $answer: String!){
        addCard(question: $question, answer: $answer){
            set {
                _id
                setName
                card {
                    _id
                    question
                    answer
                }
            }
        }
    }
    `

export const REMOVE_SET = gql `
    mutation removeSet($setName: String!){
        removeSet(setName: $setName){
            set {
                _id
                setName
                card {
                    _id
                    question 
                    answer
                }
            }
        }
    }
`

export const REMOVE_CARD = gql `
    mutation removeCard($question: String!, $answer: String!){
        removeCard(question: $question, answer: $answer){
            set {
                _id
                setName 
                card {
                    _id
                    question
                    answer
                }
            }
        }
    }
`

