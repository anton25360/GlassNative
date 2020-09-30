import React, { Component } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-community/async-storage";
import FavouriteItem from "../components/FavouriteItem";
import { ScrollView } from "react-native-gesture-handler";
// import Modal from "react-native-modal";

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

    // sets selected drink in state and opens the modal
    let showModal = (drinkNameObject: string) => {
      this.setState({ currentDrink: Object.values(drinkNameObject)[0] });
      this.setState({ showModal: true });
    };

    //cloes the modal
    let closeModal = () => {
      this.setState({ showModal: false });
    };

    //returns the favourites in custom component
    const items = this.state.favsArray.map(function (item) {
      return <FavouriteItem name={item} preview={showModal} />;
    });

    //decides wether or not the 'you have no favs, message is shown
    let hasFavourites = false;
    if (this.state.favsArray.length == 0) {
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalShadow}>
            <View style={styles.modalContent}>
              <Text>Hello i am modal</Text>

              <TouchableOpacity
                style={styles.closeModalBtn}
                onPress={() => {
                  closeModal();
                }}
              >
                <Text style={styles.closeModalBtnText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    fontSize: 17,
    fontFamily: "productSans-regular",
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },

  modalShadow: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flex: 1,
  },
  modalContent: {
    flex: 1,
    marginHorizontal: "10%",
    marginVertical: "30%",
    alignItems: 'center',
    borderRadius:3
  },
  closeModalBtn: {
    backgroundColor: "#ff3d54",
    padding: 10,
    paddingHorizontal:40,
    borderRadius: 3,
  },
  closeModalBtnText: {
    fontFamily: "productSans-regular",
    fontSize: 20,
    textAlign: "center",
  },
});
