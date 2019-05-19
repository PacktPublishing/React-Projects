const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: Int!
    title: String!
    thumbnail: String!
    price: Float
    category: Category
  }
  type Category {
    id: Int!
    title: String!
  }
  type Cart {
    productId: Int!
    productTitle: String
    price: Float
  }
  type Query {
    product: Product
    products(limit: Int): [Product]
    categories: [Category]
  }
  type Mutation {
    addToCart(productId: Int!, productTitle: String, price: Float): Cart
  }
`;

module.exports = typeDefs;
