const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: Int!
    title: String!
    thumbnail: String!
    price: Float
  }
  type Query {
    product: Product
    products: [Product]
  }
`;

module.exports = typeDefs;
