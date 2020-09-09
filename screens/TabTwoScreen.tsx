import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  console.log("favourites tab rendered");

  return (
    <View style={styles.container}>
      <Text style={styles.message}>You don't have any favourites!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 17,
    fontFamily: "productSans-regular",
    // color:'grey',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
