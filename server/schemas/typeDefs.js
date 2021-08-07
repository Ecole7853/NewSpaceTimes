const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    photos: [String]!
    preferences: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(_id: ID!): User
    me: User
  }

  type Mutation {
    addUser(name: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User

    addPhoto(photo: String!): User
    deletePhoto(photo: String!): User
    addPref(userId: ID!, pref: String!): User
    deletePref(pref: String!): User
  }
`;

module.exports = typeDefs;
