import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../context/AppContext';

const Leaderboard = ({ navigation }) => {
  const {scores} = React.useContext(AppContext)

  console.log(scores)
  return (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Leaderboard;
