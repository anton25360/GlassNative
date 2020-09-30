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

    // let favourites = this.state.favsArray;
    // <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    // this.setState({favsArray:})

    // sets selected drink in state and opens the modal
    let showModal = (drinkNameObject: string) => {
      // this.state.currentDrink = Object.values(drinkNameObject)[0];
      this.setState({ currentDrink: Object.values(drinkNameObject)[0] });

      // this.state.showModal = true;
      this.setState({ showModal: true });
    };

    //cloes the modal
    let closeModal = () => {
      // this.state.showModal = false;
      this.setState({ showModal: false });
    };

    const items = this.state.favsArray.map(function (item) {
      return <FavouriteItem name={item} preview={showModal} />;
    });

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

        {/* <View>
          <Modal
            isVisible={this.state.showModal}
            // backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
            useNativeDriver={false}
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
        </View> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => {
            alert("Modal has been closed.");
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
    // color:'grey',
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
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
    marginHorizontal: "10%",
    marginVertical: "30%",
    // backgroundColor: "blue",
    // textAlign: 'center'
    // justifyContent:'center'
    alignItems: 'center',
    borderRadius:3
  },
  closeModalBtn: {
    backgroundColor: "#ff3d54",
    // flexGrow: 1,
    padding: 10,
    paddingHorizontal:40,
    borderRadius: 3,
    margin: 10,
    marginLeft: 5,
  },
  closeModalBtnText: {
    fontFamily: "productSans-regular",
    fontSize: 20,
    textAlign: "center",
  },
});
