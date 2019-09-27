import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import Header from '../components/Header/Header';
import Lists from './Lists';
import List from './List';
import Form from './Form';

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
      <GlobalContext>
        <Switch>
          <Route exact path='/' component={Lists} />
          <Route path='/list/:id/new' component={Form} />
          <Route path='/list/:id' component={List} />
        </Switch>
      </GlobalContext>
    </AppWrapper>
  </>
);

export default App;
