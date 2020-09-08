import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const StartWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled(TouchableOpacity)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 150;
  background-color: purple;
`;

const StartButtonText = styled(Text)`
  color: white;
  font-size: 48px;
`;

const Start = ({ navigation }) => (
  <StartWrapper>
    <StartButton onPress={() => navigation.navigate('Game')}>
      <StartButtonText>Start Game</StartButtonText>
    </StartButton>
  </StartWrapper>
);

export default Start;
