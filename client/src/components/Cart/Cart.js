import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import SubHeader from '../Header/SubHeader';
import ProductItem from '../Products/ProductItem';
import Button from '../Button/Button';
import Totals from './Totals';
import { GET_CART } from '../../constants';

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

const Cart = ({ history }) => (
  <>
    {history && <SubHeader goBack={() => history.goBack()} title='Cart' />}
    <Query query={GET_CART}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <Alert>{loading ? 'Loading...' : error.message}</Alert>;
        }
        return (
          <CartWrapper>
            <CartItemsWrapper>
              {data.cart &&
                data.cart.products.map(product => (
                  <ProductItem key={product.id} data={product} />
                ))}
            </CartItemsWrapper>
            <Totals count={data.cart.total} />
            {data.cart && data.cart.products.length > 0 && (
              <Link to='/checkout'>
                <Button color='royalBlue'>Checkout</Button>
              </Link>
            )}
          </CartWrapper>
        );
      }}
    </Query>
  </>
);

export default Cart;
