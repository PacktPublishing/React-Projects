import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import Button from '../Button/Button';

const LoginButton = ({ isLoggedIn }) => (
  <ApolloConsumer>
    {client => (
      <Button
        onClick={() => client.writeData({ data: { isLoggedIn: !isLoggedIn } })}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    )}
  </ApolloConsumer>
);

export default LoginButton;
