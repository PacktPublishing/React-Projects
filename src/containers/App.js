import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from "react-router-dom";
import ListsContextProvider, { ListsContext } from '../context/ListsContextProvider';
import ItemsContextProvider, { ItemsContext } from '../context/ItemsContextProvider';
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
        <ListsContextProvider>
          <ItemsContextProvider>
            <ListsContext.Consumer>
              {
                ({ list, lists, loading: listsLoading, getListsRequest, getListRequest }) => (
                  <ItemsContext.Consumer>
                    {
                      ({ items, loading: itemsLoading, getItemsRequest, addItemRequest }) => (
                        <Switch>
                          <Route exact path="/" render={props => lists && <Lists lists={lists} loading={listsLoading} getListsRequest={getListsRequest} {...props} />} />
                          <Route path="/list/:id/new" render={props => <Form addItemRequest={addItemRequest} {...props} />} />
                          <Route path="/list/:id" render={props => list && items && <List list={list} items={items} loading={itemsLoading} getListRequest={getListRequest} getItemsRequest={getItemsRequest} {...props} /> } />
                        </Switch>
                      )
                    }
                  </ItemsContext.Consumer>
                )
              }
            </ListsContext.Consumer>
          </ItemsContextProvider>
        </ListsContextProvider>
    </AppWrapper>
  </>
);

export default App;
