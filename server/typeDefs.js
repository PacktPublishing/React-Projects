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
    total: Float
    products: [Product]
  }
  input CartInput {
    productId: Int!
  }
  type Query {
    product: Product
    products(limit: Int): [Product]
    categories: [Category]
    cart: Cart
  }
  type Mutation {
    addToCart(input: CartInput!): Cart
  }
`;

module.exports = typeDefs;
