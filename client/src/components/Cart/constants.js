import gql from "graphql-tag";

export const GET_CART_TOTAL = gql`
  query getCartTotal {
    cart {
      total
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($productId: Int!) {
    addToCart(input: { productId: $productId }) {
      total
    }
  }
`;

const GET_CART = gql`
  query getCart {
    cart {
      total
      products {
        id
        title
        thumbnail
      }
    }
  }
`;

export default GET_CART;
