import React from 'react';
import { Animated, Easing } from 'react-native';
import Lottie from 'lottie-react-native';

const Winner = () => {
  const progressValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(progressValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start();
  }, []);

  return (
    <Lottie
      autoPlay
      style={{
        width: '100%',
        height: '100%',
      }}
      source={require('../../assets/winner.json')}
      progress={progressValue}
    />
  );
};

export default Winner;
