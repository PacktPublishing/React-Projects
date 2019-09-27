import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: white;
  padding: 10px;
  line-height: 2;
  border-radius: 5px;
  font-weight: bold;
  border: 4px solid white;
  font-size: inherit;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => (
  <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);

export default Button;
