import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <p>This is the checkout, press the button below to complete:</p>
      <Button color='royalBlue'>Complete checkout</Button>
      )}
    </CheckoutWrapper>
  );
};

export default Checkout;
