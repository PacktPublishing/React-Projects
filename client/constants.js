import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($userName: String!, $password: String!) {
    loginUser(userName: $userName, password: $password) {
      userName
      token
    }
  }
`;

export const GET_CART = gql`
query {
conversations {
userName
}
}

`