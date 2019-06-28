import React from 'react';
import { TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Filled from './Filled';

const Slot = ({ index, filled, handleOnPress }) => (
  <TouchableWithoutFeedback onPress={() => !filled && handleOnPress(index)}>
  <SlotWrapper>
    { filled && <Filled backgroundColor={filled === 1 ? 'blue' : 'green'} /> }
    </SlotWrapper>
    </TouchableWithoutFeedback>
)

const SlotWrapper = styled(View)`
  width: ${Dimensions.get('window').width * 0.3};
  height: ${Dimensions.get('window').width * 0.3};
  background-color: grey;
  border: 1px solid #fff;
`

export default Slot;