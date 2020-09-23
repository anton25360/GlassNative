import React, { Component } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { Text, View } from "../components/Themed";

export default class TabTwoScreen extends Component {
  getFavouritesArray = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        // We have data!!
        const restoredArray = JSON.parse(value);
        console.log('here is the array:'+restoredArray);
      }
    } catch (error) {
      // Error retrieving data
      console.log("its empty OR there was an error");
    }
  };

  render() {
    //some code here
    this.getFavouritesArray()

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
