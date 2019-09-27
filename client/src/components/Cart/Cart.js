import React from 'react';
import styled from 'styled-components';
import SubHeader from '../Header/SubHeader';
import ProductItem from '../Products/ProductItem';
import Totals from './Totals';

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Loading = styled.span`
  width: 100%;
  text-align: center;
`;

const Cart = ({ history, loading, cart }) => (
  <>
    {history && (
      <SubHeader title='Cart' goToCart={() => history.push('/cart')} />
    )}
    {!loading ? (
      <CartWrapper>
        <CartItemsWrapper>
          {cart.products &&
            cart.products.map(product => (
              <ProductItem key={product.id} data={product} />
            ))}
        </CartItemsWrapper>
        <Totals count={cart.total} />
      </CartWrapper>
    ) : (
      <Loading>{loading}</Loading>
    )}
  </>
);

Cart.defaultProps = {
  loading: false,
  cart: {
    products: [],
    total: 0,
  },
};

export default Cart;
