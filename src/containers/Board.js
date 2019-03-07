import React, { Component } from 'react';
import styled from 'styled-components';
import Lane from '../components/Board/Lane';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

class Board extends Component {
  render() {
    return (
      <BoardWrapper>
        <Lane title="To Do" />
        <Lane title="In Progress" />
        <Lane title="Review" />
        <Lane title="Done" />
      </BoardWrapper>
    );
  }
}

export default Board;
