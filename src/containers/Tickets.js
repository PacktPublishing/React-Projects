import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Ticket from '../components/Ticket/Ticket';

const TicketsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Loading = styled.div`
  text-align: center;
`;

const Tickets = ({ loading, data }) => (
  <TicketsWrapper>
    {loading && <Loading>{loading}</Loading>}
    {data.map(ticket => (
      <Ticket key={ticket.id} marginRight ticket={ticket} />
    ))}
  </TicketsWrapper>
);

export default withDataFetching(Tickets);
