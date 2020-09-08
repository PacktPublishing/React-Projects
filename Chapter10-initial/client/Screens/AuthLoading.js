import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const AuthLoadingWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const AuthLoadingText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const AuthLoading = () => (
  <AuthLoadingWrapper>
    <AuthLoadingText>Loading...</AuthLoadingText>
  </AuthLoadingWrapper>
);

export default AuthLoading;
