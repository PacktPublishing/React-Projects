import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';

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
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </AppWrapper>
  </>
);

export default App;
