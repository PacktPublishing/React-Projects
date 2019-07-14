import gql from "graphql-tag";

export const GET_LIMIT = gql`
  query getLimit {
    limit @client
  }
`;

const GET_PRODUCTS = gql`
  query getProducts($limit: Int) {
    products(limit: $limit) {
      id
      title
      thumbnail
    }
  }
`;

export default GET_PRODUCTS;
