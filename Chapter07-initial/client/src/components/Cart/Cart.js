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

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Cart = ({ history, loading, error, cart }) => (
  <>
    {history && (
      <SubHeader title='Cart' goToCart={() => history.push('/cart')} />
    )}
    {!loading && !error ? (
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
      <Alert>{loading ? 'Loading...' : error}</Alert>
    )}
  </>
);

Cart.defaultProps = {
  loading: false,
  erorr: '',
  cart: {
    products: [],
    total: 0,
  },
};

export default Cart;
