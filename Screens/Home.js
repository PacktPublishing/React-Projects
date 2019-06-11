import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Button onPress={() => navigation.navigate('Detail')} title="Go to Detail" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
