import React from "react";
import { StyleSheet, Text, View } from "react-360";

const App = () => {
  return (
    <View style={styles.panel}>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>Welcome to this landscape!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 800,
    height: 400,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "black",
    borderColor: "blue",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

export default App;
