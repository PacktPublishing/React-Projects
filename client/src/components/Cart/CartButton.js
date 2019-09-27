import React from 'react';
import { Query } from 'react-apollo';
import Button from '../Button/Button';
import { GET_CART_TOTAL } from '../../constants';

const CartButton = ({ onClick }) => (
  <Query query={GET_CART_TOTAL}>
    {({ data, loading, error }) => (
      <Button onClick={onClick}>
        {`Cart (${loading || error ? 0 : data && data.cart.total})`}
      </Button>
    )}
  </Query>
);

export default CartButton;
