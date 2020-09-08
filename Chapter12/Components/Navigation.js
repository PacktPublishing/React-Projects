import React from 'react';
import {
  Animated,
  asset,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

const backgrounds = [
  '360_world.jpg',
  'beach.jpg',
  'landscape.jpg',
  'mountain.jpg',
  'winter.jpg',
];

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBackground: 0,
      opacity: new Animated.Value(0),
    };
  }

  changeBackground(change) {
    const { currentBackground } = this.state;

    this.setState(
      {
        currentBackground:
          currentBackground + change > backgrounds.length - 1
            ? 0
            : currentBackground + change < 0
            ? backgrounds.length - 1
            : currentBackground + change,
      },
      () => {
        Environment.setBackgroundImage(
          asset(backgrounds[this.state.currentBackground], { format: '2D' }),
        );
      },
    );
  }

  componentDidMount() {
    const { opacity } = this.state;
    this.changeBackground(0);

    Animated.loop(
      Animated.sequence([
        Animated.delay(400),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
        }),
      ]),
      {
        iterations: 10,
      },
    ).start();
  }

  render() {
    const { opacity } = this.state;

    return (
      <View style={styles.navigation}>
        <VrButton
          onClick={() => this.changeBackground(-1)}
          style={[styles.button, styles.buttonLeft]}
        >
          <Text style={styles.buttonText}>{`< Prev`}</Text>
        </VrButton>

        <VrButton
          onClick={() => this.changeBackground(1)}
          style={[styles.button, styles.buttonRight]}
        >
          <Animated.Text
            style={[styles.buttonText, { opacity }]}
          >{`Next >`}</Animated.Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    width: 800,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    width: 200,
  },
  buttonLeft: {
    marginLeft: 10,
  },
  buttonRight: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },
});
