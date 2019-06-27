import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Slot = ({ index, checked, handleOnPress }) => (
  <SlotWrapper checked={checked} onPress={() => !checked && handleOnPress(index)}>
    {checked && <SlotIcon><Text>{`player: ${checked}`}</Text></SlotIcon>}
  </SlotWrapper>
)

const SlotWrapper = styled(TouchableOpacity)`
  width: ${Dimensions.get('window').width * 0.3};
  height: ${Dimensions.get('window').width * 0.3};
  background-color: ${({ checked }) => checked ? 'pink' : '#000'};
  border: 1px solid #fff;
`

const SlotIcon = styled(View)`
  background-color: #fff;
  color: #000;
`

export default Slot;