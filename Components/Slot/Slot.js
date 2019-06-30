import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Slot = ({ index, filled, handleOnPress }) => (
  <SlotWrapper filled={filled} onPress={() => !filled && handleOnPress(index)} />
)

const SlotWrapper = styled(TouchableOpacity)`
  width: ${Dimensions.get('window').width * 0.3};
  height: ${Dimensions.get('window').width * 0.3};
  background-color: ${({ filled }) => filled ? (filled === 1 ? 'blue' : 'green') : 'grey'};
  border: 1px solid #fff;
`

const SlotIcon = styled(View)`
  background-color: #fff;
  color: #000;
`

export default Slot;