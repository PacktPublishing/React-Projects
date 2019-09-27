import React from 'react';
import styled from 'styled-components';

const Button = ({ children, color, onClick }) => (
  <ButtonWrapper color={color} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${({ color }) => (color ? color : 'white')};
  padding: 10px;
  line-height: 2;
  border-radius: 5px;
  font-weight: bold;
  border: 4px solid ${({ color }) => (color ? color : 'white')};
  font-size: inherit;
  cursor: pointer;
  text-decoration: none;
`;

export default Button;
