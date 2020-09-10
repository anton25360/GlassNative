import React, { Component } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { SearchBar } from "react-native-elements";

//get cocktail data
let drinkData: object = {};
let ingredientsObject: object = {};

let getDataFromAPI = (input: string) => {

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      drinkData = data.drinks[0]; //gets 1st result, assigns it to global object
      // getIngredients();
    });
};

let getIngredients = () => {
  ingredientsObject = {
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
    let element = ""+ingredientsArray[index];
    element = element.replace("null", "");
    ingredientsArrayFinal.push(element);
  }

  console.log(ingredientsArrayFinal);
  return ingredientsArrayFinal
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
    getDataFromAPI(this.state.search); //gets data from api

    var reset = () => {
      this.setState({ state: this.state });
    };

    setTimeout(function () {
      reset();
    }, 500);
  };

  render() {
    const { search } = this.state;

    // const elements = ["one", "two", "three"];
    // let objj = ingredientsObject;
    // const element1 = <Text>{ingredientsObject[1]}</Text>;
    // const element2 = <Text>{ingredientsObject[2]}</Text>;
    // const element3 = <Text>{ingredientsObject[3]}</Text>;
    // const element4 = <Text>{ingredientsObject[4]}</Text>;
    // const element5 = <Text>{ingredientsObject[5]}</Text>;
    // const element6 = <Text>{ingredientsObject[6]}</Text>;
    // const element7 = <Text>{ingredientsObject[7]}</Text>;
    // const element8 = <Text>{ingredientsObject[8]}</Text>;

    // let array = getIngredients()
    let a2 = getIngredients()
    let array = ['ffff', 'fggggg', 'ygewd']
    console.log('bruh');
    
    console.log(a2);
    

    const items = array.map(function(item){
      return <Text> {item} </Text>;
    });


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
            {/* <Text>1 lemon</Text>
            <Text>2 lime</Text>
            <Text>soda water</Text> */}

            {/* {element1}
            {element2}
            {element3}
            {element4}
            {element5}
            {element6}
            {element7}
            {element8} */}

            {items}

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
