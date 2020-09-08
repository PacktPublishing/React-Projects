import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import CartButton from '../Cart/CartButton';

const SubHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: cornflowerBlue;
`;

const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;

  &:first-child {
    margin-left: 20%;
  }

  &:last-child {
    margin-right: 20%;
  }
`;

const SubHeaderButton = styled(Button)`
  margin: 10px 5%;
`;

const SubHeader = ({ goBack, title, goToCart = false }) => (
  <SubHeaderWrapper>
    {goBack && (
      <SubHeaderButton onClick={goBack}>{`< Go Back`}</SubHeaderButton>
    )}
    <Title>{title}</Title>
    {goToCart && <CartButton onClick={goToCart} />}
  </SubHeaderWrapper>
);

export default SubHeader;
