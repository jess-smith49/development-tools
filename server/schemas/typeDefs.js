const {gql} = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID!
    username: String!
    email: String!
    sets: [Sets]
}

type Set {
    _id: ID!
    setName: String!
    card: [Card]
}

type Card {
    _id: ID!
    question: String!
    answer: String!
}

type Auth {
    token: ID!
    user: User
}

type Query: {
    me: User
}

type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSet(setName: String!): Set
    addCard(question: String!, answer: String!): Set
    removeSet(setId: ID!): Set
    removeCard(cardId: ID!): Set
}



`

module.exports = typeDefs;