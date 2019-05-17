const { ApolloServer } = require("apollo-server");

const resolvers = require("./resolvers.js");
const typeDefs = require("./typeDefs.js");

const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require("graphql-tools");

const schema = makeExecutableSchema({
  typeDefs
});

addMockFunctionsToSchema({
  schema,
  mocks: resolvers
});

const server = new ApolloServer({
  schema,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
