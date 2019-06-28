import React from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATION_DURATION } from '../../utils/constants';

const Filled = ({ backgroundColor }) => {
    const opacityValue = new Animated.Value(0);
    const scaleValue = new Animated.Value(0);
    
    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(
                opacityValue,
                {
                    toValue: 1,
                    duration: ANIMATION_DURATION,
                    easing: Easing.linear()
                }
            ),
            Animated.spring(
                scaleValue,
                {
                    toValue: 1,
                    easing: Easing.cubic()
                }
            )
        ]).start();
    }, [])

    return (
        <Animated.View
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor,
                opacity: opacityValue,
                transform: [{ scale: scaleValue }]
            }}
        />
    );
}

export default Filled