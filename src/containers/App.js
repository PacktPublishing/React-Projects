import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BoardHOC from './BoardHOC';
import TicketsHOC from './TicketsHOC';
import Header from '../components/App/Header';

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

class App extends Component {
  render() {
    const boards = [
      { id: 1, title: "To Do"},
      { id: 2, title: "In Progress"},
      { id: 3, title: "Review"},
      { id: 4, title: "Done"}
    ]

    return (
        <>
          <GlobalStyle />
            <AppWrapper>
            <Header />
            <BoardHOC boards={boards} dataSource={'../../assets/data.json'} />
            <TicketsHOC dataSource={'../../assets/data.json'} />
          </AppWrapper>
        </>
    );
  }
}

export default App;
