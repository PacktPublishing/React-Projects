const { gql } = require('apollo-server');

const typeDefs = gql`
  type Message {
    id: Int!
    userName: String!
    text: String!
    read: Int!
  }
  type Conversation {
    id: Int!
    userName: String!
    messages: [Message]
    AuthenticationError: String
  }
  type User {
    userName: String!
    token: String!
  }
  type Query {
    conversations(limit: Int): [Conversation]
    conversation(userName: String!): Conversation
  }
  type Mutation {
    sendMessage(to: String!, text: String!): Conversation
    loginUser(userName: String!, password: String!): User
  }
  type Subscription {
    messageAdded(userName: String!): Message
  }
`;

module.exports = typeDefs;
