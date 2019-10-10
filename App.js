import React from "react";
import { StyleSheet, Text, View } from "react-native";
const dataBrands = require('./app/data/preSetBrands.json');


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Brand Friend is here</Text>
      <Text> {dataBrands.preSetBrands[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
