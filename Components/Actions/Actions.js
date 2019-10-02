import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button/Button';

const ActionsWrapper = styled(View)`
  padding: 40px 0;
  height: 250px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Actions = ({ winner, resetSlots, navigation }) => (
  <ActionsWrapper>
    {winner && (
      <>
        <Button onPress={() => resetSlots()} title='Start again' />
        <Button
          onPress={() => navigation.navigate('LeaderBoard')}
          title='View scores'
        />
      </>
    )}
  </ActionsWrapper>
);

export default Actions;
