import React from 'react';
import { Alert, View, Dimensions } from 'react-native';
import {
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Filled from './Filled';

const SlotWrapper = styled(View)`
  width: ${Dimensions.get('window').width * 0.3};
  height: ${Dimensions.get('window').width * 0.3};
  background-color: grey;
  border: 1px solid #fff;
`;

const Slot = ({ index, filled, handleOnPress }) => {
  const [start, setStart] = React.useState(false);
  const doubleTapRef = React.useRef(null);

  const onTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert(
        'Hint',
        'You either need to double tap or press the slot longer to make your move',
      );
    }
  };

  const onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setStart(true);
    }

    if (event.nativeEvent.state === State.END) {
      setTimeout(() => {
        !filled && handleOnPress(index);
        setStart(false);
      }, 100);
    }
  };

  return (
    <LongPressGestureHandler
      onHandlerStateChange={onDoubleTap}
      minDurationMs={500}
    >
      <TapGestureHandler onHandlerStateChange={onTap} waitFor={doubleTapRef}>
        <TapGestureHandler
          ref={doubleTapRef}
          shouldCancelWhenOutside={true}
          onHandlerStateChange={onDoubleTap}
          numberOfTaps={2}
        >
          <SlotWrapper>
            <Filled filled={filled} start={start} />
          </SlotWrapper>
        </TapGestureHandler>
      </TapGestureHandler>
    </LongPressGestureHandler>
  );
};

export default Slot;
