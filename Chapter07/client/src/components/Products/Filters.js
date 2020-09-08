import React from 'react';
import { ApolloConsumer } from 'react-apollo';

const Filters = ({ limit }) => (
  <ApolloConsumer>
    {client => (
      <>
        <label htmlFor='limit'>Number of products: </label>
        <select
          id='limit'
          value={limit}
          onChange={e => {
            client.writeData({ data: { limit: e.target.value } });
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </>
    )}
  </ApolloConsumer>
);

export default Filters;
