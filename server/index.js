const express = require('express');
const { createServer } = require('http');
const { ApolloServer, gql } = require('apollo-server-express');

const resolvers = require("./resolvers.js");
const typeDefs = require("./typeDefs.js");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    token: req && req.headers.authorization
  })
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, () => {
  console.log('Apollo Server on http://localhost:4000');
});