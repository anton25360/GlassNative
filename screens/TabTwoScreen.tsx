import React, { Component } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-community/async-storage";
import FavouriteItem from "../components/FavouriteItem";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";

export default class TabTwoScreen extends Component {
  state = {
    favsArray: [],
    showModal: false,
    currentDrink: "",
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

    // sets selected drink in state and opens the modal
    let showModal = (drinkNameObject: string) => {
      this.state.currentDrink = Object.values(drinkNameObject)[0];
      this.state.showModal = true;
    };

    //cloes the modal
    let closeModal = () => {
      this.state.showModal = false;
    };

    const items = favourites.map(function (item) {
      return <FavouriteItem name={item} preview={showModal} />;
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
            alignSelf: "stretch",
          }}
        >
          {items}
        </ScrollView>

        <View>
          <Modal
            isVisible={this.state.showModal}
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            // animationIn={"slideInUp"}
            // animationOut={"slideOutUp"}
          >
            <View style={{ flex: 1 }}>
              <Text>{this.state.currentDrink}</Text>

              <TouchableOpacity
                style={styles.closeModalBtn}
                onPress={() => {
                  closeModal();
                }}
              >
                <Text style={styles.closeModalBtnText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
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
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  closeModalBtn: {},
  closeModalBtnText: {},
});
