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
  constructor() {
    super();
    this.state = {
      data: [],
      loading: 'Loading...'
    }
  }

  async componentDidMount() {
    try {
      const tickets = await fetch('../../assets/data.json');
      const ticketsJSON = await tickets.json();

      if (ticketsJSON) {
        this.setState({
          data: ticketsJSON,
          loading: false
        })
      }
    } catch(error) {
      this.setState({
       loading: error.message
     })
    }
  }

  render() {
    const { data, loading } = this.state;

    const boards = [
      { id: 1, title: "To Do"},
      { id: 2, title: "In Progress"},
      { id: 3, title: "Review"},
      { id: 4, title: "Done"}
    ]

    return (
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
  }
}

export default Board;
