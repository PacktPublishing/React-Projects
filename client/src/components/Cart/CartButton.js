import React from 'react';
import Button from '../Button/Button';

const CartButton = ({ onClick }) => (
  <Button onClick={onClick}>{`Cart (0)`}</Button>
);

export default CartButton;
