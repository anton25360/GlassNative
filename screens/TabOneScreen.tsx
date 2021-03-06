import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, Alert } from "react-native";
import { Text, View } from "../components/Themed";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

export default class TabOneScreen extends Component {
  state = {
    search: "",
    currentDrink: "",
    currentDrinkSubtitle: "",
    currentDrinkImage: "",
    currentIntructions: "",
    currentIngredients: [],
    showResults: false,
  };

  updateSearch = (search: string) => {
    this.setState({ search });
  };

  render() {
    let getDataFromAPI = () => {
      // let drinkData: object = {};

      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          this.state.search
      )
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
            drinkData.strDrink,
            drinkData.strAlcoholic + " " + drinkData.strCategory,
            drinkData.strInstructions,
            ingredientsArrayFinal,
            drinkData.strDrinkThumb
          );
        });
    };

    let setDrinkState = (
      name: string,
      subtitle: string,
      instructions: string,
      ingredients: Array<string>,
      image: string
    ) => {
      this.setState({ currentDrink: name });
      this.setState({ currentDrinkSubtitle: subtitle });
      this.setState({ currentIntructions: instructions });
      this.setState({ currentIngredients: ingredients });
      this.setState({ currentDrinkImage: image });
      this.setState({ showResults: true });
    };

    let addToFavourites = () => {
      AsyncStorage.getItem("favouritesArray").then((favouritesArray) => {
        const favouritesArrayDecoded = favouritesArray
          ? JSON.parse(favouritesArray)
          : [];

        if (favouritesArrayDecoded.includes(this.state.currentDrink)) {
          Alert.alert("Error", "You've already added this to your Favourites!"); //no title
        } else {
          Alert.alert(
            "Success",
            this.state.currentDrink + " has been added to your Favourites!"
          ); //no title
          favouritesArrayDecoded.push(this.state.currentDrink);
          AsyncStorage.setItem(
            "favouritesArray",
            JSON.stringify(favouritesArrayDecoded)
          );
        }
      });
    };

    let createStorage = () => {
      AsyncStorage.getItem("favouritesArray").then((data) => {
        let tempArray: Array<string> = [];

        if (data == null) {
          tempArray.push("Mojito");

          AsyncStorage.setItem("favouritesArray", JSON.stringify(tempArray));
        }
      });
    };

    const items = this.state.currentIngredients.map(function (item) {
      return <Text style={styles.ingredientsText}> {item} </Text>;
    });

    createStorage();

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="eg: Mojito"
          onChangeText={this.updateSearch}
          returnKeyType="search"
          onSubmitEditing={() => getDataFromAPI()}
          value={this.state.search}
        />

        <View
          style={{
            display: this.state.showResults ? "none" : "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.introWelcomeTo}>welcome to</Text>
          <Text style={styles.introGlass}>Glass</Text>
          <Text style={styles.introSubtext}>
            Start searching or go to favourites.
          </Text>
        </View>

        {/* drink data goes here (container) */}
        <View style={{ display: this.state.showResults ? "flex" : "none" }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          >
            {/* drink name */}
            <Text style={styles.title}>{this.state.currentDrink}</Text>
            <Text style={styles.titleSub}>
              {this.state.currentDrinkSubtitle}
            </Text>

            {/* ingrdients */}
            <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
            {items}

            {/* instructions */}
            <Text style={styles.instructionsTitle}>INSTRUCTIONS</Text>
            <Text style={styles.instructionsText}>
              {this.state.currentIntructions}
            </Text>

            {/* drink image */}
            <Image
              style={styles.drinkImage}
              source={{ uri: this.state.currentDrinkImage }}
            ></Image>

            {/* add to favourites button */}
            <View style={styles.favouritesBtnContainer}>
              <Button
                icon={<Icon name="heart-o" size={15} color="white" />}
                title="Add to Favourites"
                titleStyle={styles.favouritesBtnText}
                // style={styles.favouritesBtn}
                buttonStyle={{
                  backgroundColor: "#54bf77",
                }}
                raised={true}
                onPress={() => addToFavourites()}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //fullscreen
  },
  dataContainer: {
    flex: 1,
    alignItems: "center",
  },

  //drink title
  title: {
    fontSize: 40,
    fontFamily: "productSans-bold",
    marginTop: 20,
  },
  titleSub: {
    fontSize: 17,
    fontFamily: "productSans-regular",
    marginTop: 5,
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

  //drink Image
  drinkImage: {
    width: 270,
    height: 270,
    borderRadius: 5,
  },

  //favs button
  favouritesBtnContainer: {
    marginTop: 30,
    marginBottom: 100,
  },
  favouritesBtnText: {
    paddingLeft: 6,
    fontFamily: "productSans-regular",
  },

  //into text (hidden on search)
  introWelcomeTo: {
    fontFamily: "productSans-regular",
    fontSize: 25,
  },
  introGlass: {
    fontFamily: "productSans-regular",
    fontSize: 55,
  },
  introSubtext: {
    fontFamily: "productSans-regular",
    fontSize: 17,
    marginTop: 30,
  },
});
