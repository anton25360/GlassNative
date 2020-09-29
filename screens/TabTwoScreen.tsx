import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-community/async-storage";
import FavouriteItem from '../components/FavouriteItem'
import { ScrollView } from "react-native-gesture-handler";

export default class TabTwoScreen extends Component {
  state = {
    favsArray: [],
  };

  render() {
    //some code here
    const getData = async (key: string) => {
      try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
          let dataDecoded = JSON.parse(data);
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

    let favourites = this.state.favsArray;

    const items = favourites.map(function (item) {
      // return <Text style={styles.message}> {item} </Text>;
      return <FavouriteItem name={item} />

    });

    let hasFavourites = false;

    if (favourites.length == 0) {
      hasFavourites = false;
    } else {
      hasFavourites = true;
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            display: hasFavourites ? "none" : "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.message}>You don't have any favourites!</Text>
        </View>

        <ScrollView
          style={{
            display: hasFavourites ? "flex" : "none",
            flex: 1,
            alignSelf:'stretch'
          }}
        >
          {items}
        </ScrollView>

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
    alignSelf: 'stretch',

    justifyContent: "center",
    alignItems: "center",
  },
});
