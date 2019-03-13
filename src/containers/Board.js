import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../HOC';
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

const Board = ({boards, loading, data}) => (
  <BoardWrapper>
    { boards.map((board) =>
      <Lane
        key={board.id}
        title={board.title}
        loading={loading}
        tickets={data.filter((ticket) => ticket.board === board.id)}
      />
    )}
  </BoardWrapper>
);

export default withDataFetching(Board);
