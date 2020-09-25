import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-community/async-storage";

export default class TabTwoScreen extends Component {

  state = {
    favsArray: [],
  };
  
  
  render() {
    //some code here
    const getData = async (key) => {
      try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
          let dataDecoded = JSON.parse(data)
          return dataDecoded;
        }
      } catch (error) {
        console.log(error);
      }
    };
 
     getData("favouritesArray") 
    .then((data) => data)
    .then((value) => this.setState({ favsArray: value }))
    .catch((err) => console.log("AsyncStorageErr: " + err));


    const items = this.state.favsArray.map(function (item) {
      return <Text style={styles.message}> {item} </Text>;
    });


    return (
      <View style={styles.container}>
        <Text style={styles.message}>You don't have any favourites!</Text>
        {items}
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
