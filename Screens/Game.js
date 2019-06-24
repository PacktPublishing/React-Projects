import React from "react";
import { Text } from 'react-native';

const Game = ({ navigation }) => {
  const item = navigation.getParam('item', {})

  return <Text>Game</Text>
};

export default Game;
