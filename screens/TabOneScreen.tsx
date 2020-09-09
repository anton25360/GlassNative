import React, { Component } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { SearchBar } from "react-native-elements";

//get cocktail data
let drinkData: object = {};
let getData = (input: string) => {
  console.log("calling api...");

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      drinkData = data.drinks[0]; //gets 1st result, assigns it to global object
    });
};

//start render
export default class TabOneScreen extends Component {
  state = {
    search: "",
  };

  updateSearch = (search: string) => {
    this.setState({ search });
    getData(search); //gets data from api
    console.log(drinkData);
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="eg: Mojito"
          onChangeText={this.updateSearch}
          value={search}
        />

        {/* drink data goes here (container) */}
        <View style={styles.dataContainer}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          >
            {/* drink name */}
            <Text style={styles.title}>{drinkData.strDrink}</Text>
            <Text style={styles.titleSub}>
              {drinkData.strAlcoholic + " " + drinkData.strCategory}
            </Text>

            {/* ingrdients */}
            <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
            <Text>1 sugar</Text>
            <Text>2 lime</Text>
            <Text>soda water</Text>

            {/* instrictions */}
            <Text style={styles.instructionsTitle}>INSTRUCTIONS</Text>
            <Text style={styles.instructionsText}>
              {drinkData.strInstructions}
            </Text>

            {/* drink image */}
            <Image
              style={styles.drinkImage}
              source={{ uri: drinkData.strDrinkThumb }}
            ></Image>
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
  title: {
    fontSize: 40,
    fontFamily: "productSans-bold",
    marginTop: 40,
  },
  titleSub: {
    fontSize: 17,
    fontFamily: "productSans-regular",
    marginTop: 10,
  },

  // ingredients
  ingredientsTitle: {
    fontSize: 20,
    fontFamily: "productSans-bold",
    marginTop: 20,
  },

  //instructions
  instructionsTitle: {
    fontSize: 20,
    fontFamily: "productSans-bold",
    marginTop: 20,
  },
  instructionsText: {
    // fontSize: 20,
    fontFamily: "productSans-regular",
    // justifyContent: 'center',
    textAlign: "center",
    padding: 30,
    // marginTop: 20
  },

  //drink Image
  drinkImage: {
    width: 150,
    height: 150,
  },
});
