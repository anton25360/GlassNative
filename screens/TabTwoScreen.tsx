import React, { Component } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { Text, View } from "../components/Themed";

export default class TabTwoScreen extends Component {
  render() {
    //some code here

    return (
      <View style={styles.container}>
        <Text style={styles.message}>You don't have any favourites!</Text>
      </View>
    );
  }
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
