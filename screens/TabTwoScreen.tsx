import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-community/async-storage";

export default class TabTwoScreen extends Component {

  returnFavouritesArray() {
    let tempArray:any = []

    AsyncStorage.getItem("favouritesArray").then((favouritesArray) => {
      const favouritesArrayDecoded = favouritesArray
        ? JSON.parse(favouritesArray)
        : [];      
      tempArray.push(favouritesArrayDecoded)
    });
  
    
    return tempArray
  }

  returnFavouriteItems() {
    let thing = ['aa','bb','cc']

      thing.map(function (item) {
      return <Text style={styles.message}> {item} </Text>;
    });
  }


  render() {
    //some code here
    console.log('bruh moment = ' + this.returnFavouritesArray())

    // let thing2 = this.returnFavouritesArray()    
    let thing = ['aa', 'bb', 'cc']
    
    const items = thing.map(function (item:string) {
      return <Text style={styles.message}> {item} </Text>;
    });


    
    // console.log();
    
    

    
    // AsyncStorage.getItem("favouritesArray").then((favouritesArray) => {
    //   const favouritesArrayDecoded = favouritesArray
    //     ? JSON.parse(favouritesArray)
    //     : [];
    //   console.log(favouritesArrayDecoded);
    //   alert(favouritesArrayDecoded)
    // });





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
