import React from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATION_DURATION } from '../../utils/constants';

const Filled = ({ filled, start }) => {
  const [opacityValue] = React.useState(new Animated.Value(0));
  const [scaleValue] = React.useState(new Animated.Value(0.8));

  React.useEffect(() => {
    start &&
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        easing: Easing.linear(),
      }).start();
  }, [start]);

  React.useEffect(() => {
    filled &&
      Animated.spring(scaleValue, {
        toValue: 1,
        easing: Easing.cubic(),
      }).start();
  }, [filled]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: filled === 1 ? 'blue' : 'green',
        opacity: opacityValue,
        transform: [{ scale: scaleValue }],
      }}
    />
  );
};

export default Filled;
