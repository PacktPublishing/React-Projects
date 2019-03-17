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
    const lanes = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" }
    ]

    return (
      <BoardWrapper>
        { lanes.map((lane) => <Lane key={board.id} title={board.title} />) }
      </BoardWrapper>
    );
  }
}

export default Board;
