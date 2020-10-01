import React, { Component } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-community/async-storage";
import FavouriteItem from "../components/FavouriteItem";
import { ScrollView } from "react-native-gesture-handler";
// import Modal from "react-native-modal";

//get cocktail data
// let drinkData: object = {};
// let ingredientsObject: object = {};

// let getDataFromAPI = (input: string) => {
//   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input)
//     .then(function (data) {
//       return data.json();
//     })
//     .then(function (data) {
//       drinkData = data.drinks[0]; //gets 1st result, assigns it to global object
//       // getIngredients();
//     });
// };

// let getIngredients = () => {
//   ingredientsObject = {
//     1: drinkData.strMeasure1 + drinkData.strIngredient1,
//     2: drinkData.strMeasure2 + drinkData.strIngredient2,
//     3: drinkData.strMeasure3 + drinkData.strIngredient3,
//     4: drinkData.strMeasure4 + drinkData.strIngredient4,
//     5: drinkData.strMeasure5 + drinkData.strIngredient5,
//     6: drinkData.strMeasure6 + drinkData.strIngredient6,
//     7: drinkData.strMeasure7 + drinkData.strIngredient7,
//     8: drinkData.strMeasure8 + drinkData.strIngredient8,
//     9: drinkData.strMeasure9 + drinkData.strIngredient9,
//     10: drinkData.strMeasure10 + drinkData.strIngredient10,
//     11: drinkData.strMeasure11 + drinkData.strIngredient11,
//     12: drinkData.strMeasure12 + drinkData.strIngredient12,
//     13: drinkData.strMeasure13 + drinkData.strIngredient13,
//     14: drinkData.strMeasure14 + drinkData.strIngredient14,
//     15: drinkData.strMeasure15 + drinkData.strIngredient15,
//   };

//   let count = 1;
//   let ingredientsArray = [];
//   let ingredientsArrayFinal = [];

//   //removes empty ingredients from object and puts existing ones in an array
//   while (count != 16) {
//     if (ingredientsObject[count] == 0) {
//       delete ingredientsObject[count];
//     } else {
//       ingredientsArray.push(ingredientsObject[count]);
//     }
//     count++;
//   }

//   //removes the word null from the array (eg: for ingredients like orange juice)
//   for (let index = 0; index < ingredientsArray.length; index++) {
//     let element = "" + ingredientsArray[index];
//     element = element.replace("null", "");
//     ingredientsArrayFinal.push(element);
//   }

//   console.log(ingredientsArrayFinal);
//   return ingredientsArrayFinal;
// };

export default class TabTwoScreen extends Component {
  state = {
    favsArray: [],
    showModal: false,
    currentDrink: "",
    currentIntructions: "",
    currentIngredients: [],
  };

  render() {
    //puts drink data in state
    let setDrinkState = (
      name: string,
      instructions: string,
      ingredients: Array<string>
    ) => {
      this.setState({ currentDrink: name });
      this.setState({ currentIntructions: instructions });
      this.setState({ currentIngredients: ingredients });
    };

    // gets name, ingredients, instructions from drink name, puts them in state using the function above
    let getDataFromAPI = (input: string) => {
      // let drinkData: object = {};

      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input)
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          let drinkData = data.drinks[0]; //gets 1st result, assigns it to global object

          let ingredientsObject = {
            1: drinkData.strMeasure1 + drinkData.strIngredient1,
            2: drinkData.strMeasure2 + drinkData.strIngredient2,
            3: drinkData.strMeasure3 + drinkData.strIngredient3,
            4: drinkData.strMeasure4 + drinkData.strIngredient4,
            5: drinkData.strMeasure5 + drinkData.strIngredient5,
            6: drinkData.strMeasure6 + drinkData.strIngredient6,
            7: drinkData.strMeasure7 + drinkData.strIngredient7,
            8: drinkData.strMeasure8 + drinkData.strIngredient8,
            9: drinkData.strMeasure9 + drinkData.strIngredient9,
            10: drinkData.strMeasure10 + drinkData.strIngredient10,
            11: drinkData.strMeasure11 + drinkData.strIngredient11,
            12: drinkData.strMeasure12 + drinkData.strIngredient12,
            13: drinkData.strMeasure13 + drinkData.strIngredient13,
            14: drinkData.strMeasure14 + drinkData.strIngredient14,
            15: drinkData.strMeasure15 + drinkData.strIngredient15,
          };

          let count = 1;
          let ingredientsArray = [];
          let ingredientsArrayFinal = [];

          //removes empty ingredients from object and puts existing ones in an array
          while (count != 16) {
            if (ingredientsObject[count] == 0) {
              delete ingredientsObject[count];
            } else {
              ingredientsArray.push(ingredientsObject[count]);
            }
            count++;
          }

          //removes the word null from the array (eg: for ingredients like orange juice)
          for (let index = 0; index < ingredientsArray.length; index++) {
            let element = "" + ingredientsArray[index];
            element = element.replace("null", "");
            ingredientsArrayFinal.push(element);
          }

          setDrinkState(
            input,
            drinkData.strInstructions,
            ingredientsArrayFinal
          );
        });
    };

    let getDataFromStorage = async (key: string) => {
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

    getDataFromStorage("favouritesArray")
      .then((data) => data)
      .then((value) => this.setState({ favsArray: value }))
      .catch((err) => console.log("AsyncStorageErr: " + err));

    // sets selected drink in state and opens the modal
    let showModal = (drinkNameObject: string) => {
      let drinkName = Object.values(drinkNameObject)[0];
      getDataFromAPI(drinkName);
      this.setState({ showModal: true });
    };

    //cloes the modal
    let closeModal = () => {
      this.setState({ showModal: false });
    };

    //returns the favourites in custom component
    let favouriteCards = this.state.favsArray.map(function (item) {
      return <FavouriteItem name={item} preview={showModal} />;
    });

    //returns the ingredients
    let ingredients = this.state.currentIngredients.map(function (item) {
      return <Text style={styles.ingredientsText}>{item}</Text>
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
          {favouriteCards}
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
              <Text style={styles.title}>{this.state.currentDrink}</Text>

              {/* ingrdients */}
              {ingredients}

              {/* instrictions */}
              <Text style={styles.instructionsText}>
                {this.state.currentIntructions}
              </Text>

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
  },

  modalShadow: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flex: 1,
    justifyContent: "center",
  },
  modalContent: {
    marginHorizontal: "10%",
    alignItems: "center",
    borderRadius: 3,
  },
  closeModalBtn: {
    backgroundColor: "#ff3d54",
    padding: 9,
    paddingHorizontal: 40,
    borderRadius: 3,
  },
  closeModalBtnText: {
    fontFamily: "productSans-regular",
    fontSize: 20,
    textAlign: "center",
  },

  //modal text
  title: {
    fontSize: 30,
    fontFamily: "productSans-bold",
    marginTop: 20,
    textAlign: "center",
  },

  // ingredients
  ingredientsTitle: {
    fontSize: 20,
    fontFamily: "productSans-bold",
    marginTop: 20,
    paddingBottom: 3,
  },
  ingredientsText: {
    fontSize: 19,
    fontFamily: "productSans-regular",
    padding: 3,
  },

  //instructions
  instructionsTitle: {
    fontSize: 20,
    fontFamily: "productSans-bold",
    marginTop: 20,
  },
  instructionsText: {
    fontSize: 19,
    fontFamily: "productSans-regular",
    textAlign: "center",
    padding: 30,
    marginTop: -25,
  },
});
