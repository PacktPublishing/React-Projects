import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($userName: String!, $password: String!) {
    loginUser(userName: $userName, password: $password) {
      userName
      token
    }
  }
`;

export const GET_POST = gql`
  query getPost($userName: String!) {
    post(userName: $userName) {
      id
      userName
      image
      stars {
        userName
      }
      comments {
        id
        userName
        text
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      userName
      image
      totalStars
      totalComments
    }
  }
`;
