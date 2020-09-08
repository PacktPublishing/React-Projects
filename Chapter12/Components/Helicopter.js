import React from 'react';
import { Animated, asset } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class Helicopter extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: new Animated.Value(0.02),
      rotateY: new Animated.Value(90),
    };
  }

  componentDidMount() {
    const { scale, rotateY } = this.state;

    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(rotateY, {
        toValue: 0,
        duration: 8000,
      }),
      Animated.delay(800),
      Animated.timing(scale, {
        toValue: 0,
        duration: 8000,
      }),
    ]).start();
  }
  render() {
    const { scale, rotateY } = this.state;
    return (
      <AnimatedEntity
        source={{
          obj: asset('helicopter.obj'),
        }}
        style={{
          transform: [
            { rotateY },
            { scaleX: scale },
            { scaleY: scale },
            { scaleZ: scale },
          ],
        }}
      />
    );
  }
}
