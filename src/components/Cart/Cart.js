import React from "react";
import styled from "styled-components";
import SubHeader from "../Header/SubHeader";
import ProductItem from "../Products/ProductItem";
import Totals from "./Totals";

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

const Cart = ({ match, history, loading, products }) => {
  const isEmpty = products.length === 0 ? "Cart is empty" : false;

  return (
    <>
      {history && (
        <SubHeader goBack={() => history.goBack()} title="Cart (0)" />
      )}

      {!loading && !isEmpty ? (
        <CartWrapper>
          <CartItemsWrapper>
            {products &&
              products.map(product => (
                <ProductItem key={product.id} data={product} />
              ))}
          </CartItemsWrapper>
          <Totals price={23} />
        </CartWrapper>
      ) : (
        <Loading>{loading || isEmpty}</Loading>
      )}
    </>
  );
};

Cart.defaultProps = {
  loading: false,
  products: []
};

export default Cart;
