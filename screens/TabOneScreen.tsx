import React, { Component } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { SearchBar } from "react-native-elements";

//get cocktail data
let drinkData: object = {};
// let ingredientsNameArray: any = [];
// let ingredientsValueArray: any = [];

let getDataFromAPI = (input: string) => {
  console.log("calling api...");

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      drinkData = data.drinks[0]; //gets 1st result, assigns it to global object
      console.log(drinkData);
      
      getIngredientNames();
    });
};

let getIngredientNames = () => {
  let ingredientsNameArray: any = [];
  ingredientsNameArray.push(drinkData.strIngredient1);
  ingredientsNameArray.push(drinkData.strIngredient2);
  ingredientsNameArray.push(drinkData.strIngredient3);
  ingredientsNameArray.push(drinkData.strIngredient4);
  ingredientsNameArray.push(drinkData.strIngredient5);
  ingredientsNameArray.push(drinkData.strIngredient6);
  ingredientsNameArray.push(drinkData.strIngredient7);
  ingredientsNameArray.push(drinkData.strIngredient8);
  ingredientsNameArray.push(drinkData.strIngredient9);
  ingredientsNameArray.push(drinkData.strIngredient10);
  ingredientsNameArray.push(drinkData.strIngredient11);
  ingredientsNameArray.push(drinkData.strIngredient12);
  ingredientsNameArray.push(drinkData.strIngredient13);
  ingredientsNameArray.push(drinkData.strIngredient14);
  ingredientsNameArray.push(drinkData.strIngredient15);

  // removes undefined
  var ingredientsNameArrayFiltered = ingredientsNameArray.filter(function (
    e: any
  ) {
    return e != null;
  });

  // return ingredientsNameArrayFiltered;
  console.log(ingredientsNameArrayFiltered);
};

let getIngredientMeasurements = () => {
  let ingredientsMeasurementArray: any = [];
  ingredientsMeasurementArray.push(drinkData.strMeasure1);
  ingredientsMeasurementArray.push(drinkData.strMeasure2);
  ingredientsMeasurementArray.push(drinkData.strMeasure3);
  ingredientsMeasurementArray.push(drinkData.strMeasure4);
  ingredientsMeasurementArray.push(drinkData.strMeasure5);
  ingredientsMeasurementArray.push(drinkData.strMeasure6);
  ingredientsMeasurementArray.push(drinkData.strMeasure7);
  ingredientsMeasurementArray.push(drinkData.strMeasure8);
  ingredientsMeasurementArray.push(drinkData.strMeasure9);
  ingredientsMeasurementArray.push(drinkData.strMeasure10);
  ingredientsMeasurementArray.push(drinkData.strMeasure11);
  ingredientsMeasurementArray.push(drinkData.strMeasure12);
  ingredientsMeasurementArray.push(drinkData.strMeasure13);
  ingredientsMeasurementArray.push(drinkData.strMeasure14);
  ingredientsMeasurementArray.push(drinkData.strMeasure15);

  // removes undefined
  var ingredientsNameArrayFiltered = ingredientsNameArray.filter(function (
    e: any
  ) {
    return e != null;
  });

  // return ingredientsNameArrayFiltered;
  console.log(ingredientsNameArrayFiltered);
};

//start render
export default class TabOneScreen extends Component {
  state = {
    search: "",
  };

  updateSearch = (search: string) => {
    this.setState({ search });
  };

  onSubmit = () => {
    // let searchValue: string = this.state.search;
    getDataFromAPI(this.state.search); //gets data from api
    // getIngredientNames()

    var reset = () => {
      this.setState({ state: this.state });
    };

    setTimeout(function () {
      reset();
    }, 500);
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="eg: Mojito"
          onChangeText={this.updateSearch}
          returnKeyType="search"
          onSubmitEditing={this.onSubmit}
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
    // marginTop: 40,
  },
  titleSub: {
    fontSize: 17,
    fontFamily: "productSans-regular",
    // marginTop : 10,
  },

  // ingredients
  ingredientsTitle: {
    fontSize: 20,
    fontFamily: "productSans-bold",
    // marginTop: 20,
  },

  //instructions
  instructionsTitle: {
    fontSize: 20,
    fontFamily: "productSans-bold",
    // marginTop: 20,
  },
  instructionsText: {
    // fontSize: 20,
    fontFamily: "productSans-regular",
    // justifyContent: 'center',
    textAlign: "center",
    // padding: 30,
    // marginTop: 20
  },

  //drink Image
  drinkImage: {
    width: 150,
    height: 150,
  },
});
