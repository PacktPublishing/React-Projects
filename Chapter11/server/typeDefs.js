const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    id: Int!
    userName: String!
    image: String!
    totalStars: Float!
    totalComments: Float!
    stars: [Star]
    comments: [Comment]
  }
  type Comment {
    id: Int!
    userName: String!
    text: String!
  }
  type Star {
    id: Int!
    userName: String!
  }
  type User {
    userName: String!
    token: String!
    expoToken: String
  }
  type Query {
    posts: [Post]
    post(userName: String!): Post
  }
  type Mutation {
    addPost(image: String!): Post
    loginUser(userName: String!, password: String!): User
    storeExpoToken(expoToken: String!): User
  }
`;

module.exports = typeDefs;
