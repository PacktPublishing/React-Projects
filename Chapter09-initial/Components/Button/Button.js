import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(TouchableOpacity)`
  width: 90%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  background-color: purple;
  margin-bottom: 10px;
`;

const StyledButtonText = styled(Text)`
  color: white;
  font-size: 28px;
`;

const Button = ({ title, onPress }) => (
  <StyledButton onPress={onPress}>
    <StyledButtonText>{title}</StyledButtonText>
  </StyledButton>
);

export default Button;
