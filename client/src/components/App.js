import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Login from './Checkout/Login';
import Checkout from './Checkout/Checkout';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';

const isAuthenticated = sessionStorage.getItem('token');

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = isAuthenticated;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {
    Mutation: {
      setLimit: (_, { limit }) => {
        cache.writeData({
          data: {
            limit,
          },
        });

        return limit;
      },
    },
  },
  typeDefs: `
    extend type Query {
        limit: Int!
    }
  `,
});

cache.writeData({
  data: {
    limit: 5,
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route
          path='/checkout'
          render={props =>
            isAuthenticated ? (
              <Checkout props={props} />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
        <Route path='/login' component={Login} />
      </Switch>
    </AppWrapper>
  </ApolloProvider>
);

export default App;
