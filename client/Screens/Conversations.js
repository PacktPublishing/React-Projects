import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Conversations = ({ navigation }) => (
  <View style={styles.container}>
    <Text>All conversations</Text>
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

export default Conversations;