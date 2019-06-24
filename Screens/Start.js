import React from "react";
import { FlatList, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Start = ({ navigation }) => (
  <StartWrapper>
    <Button
        onPress={() => navigation.navigate('Game')}
        title="Info"
        color="#000"
      />
  </StartWrapper>
);

const StartWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default Start;
