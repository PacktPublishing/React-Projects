import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($userName: String!, $password: String!) {
    loginUser(userName: $userName, password: $password) {
      userName
      token
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($to: String!, $text: String!) {
    sendMessage(to: $to, text: $text) {
      userName
    }
  }
`;

export const GET_CONVERSATIONS = gql`
  query {
    conversations {
      id
      userName
      messages {
        text
      }
    }
  }
`;

export const GET_CONVERSATION = gql`
  query getConversation($userName: String!) {
    conversation(userName: $userName) {
      userName
      messages {
        id
        userName
        text
      }
    }
  }
`;

export const MESSAGE_ADDED = gql`
  subscription messageAdded($userName: String!) {
    messageAdded(userName: $userName) {
      id
      userName
      text
    }
  }
`;
