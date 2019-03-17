import React from 'react';
import styled from 'styled-components';
import Ticket from './Ticket';

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
`;

const TicketsWrapper = styled.div`
  padding: 5%;
`;

const Loading = styled.div`
    text-align: center;
`;

const Lane = ({ laneId, tickets, loading, onDragStart, onDragOver, onDrop, title }) => (
  <LaneWrapper
    onDragOver={(element) => onDragOver(element)}
    onDrop={(element) => onDrop(element, laneId)}
  >
    <Title>{title}</Title>
    { (loading) && <Loading>{loading}</Loading>}
    <TicketsWrapper>
      { tickets.map((ticket) => <Ticket key={ticket.id} onDragStart={onDragStart} ticket={ticket} />)}
    </TicketsWrapper>
  </LaneWrapper>
);

export default Lane;
