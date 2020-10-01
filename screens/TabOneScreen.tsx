import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  // AsyncStorage
} from "react-native";
import { Text, View } from "../components/Themed";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

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

//start render
export default class TabOneScreen extends Component {
  state = {
    search: "",
    currentDrink: "",
    currentIntructions: "",
    currentIngredients: [],
  };

  updateSearch = (search: string) => {
    this.setState({ search });
  };

  // onSubmit = () => {
  //   getDataFromAPI(this.state.search); //gets data from api

  //   var reset = () => {
  //     this.setState({ state: this.state });
  //   };

  //   setTimeout(function () {
  //     reset();
  //   }, 500);
  // };

  

  //add to favs
  onButtonPress = async () => {
    let searchValue = drinkData.strDrink;

    AsyncStorage.getItem("favouritesArray").then((favouritesArray) => {
      const favouritesArrayDecoded = favouritesArray
        ? JSON.parse(favouritesArray)
        : [];

      if (favouritesArrayDecoded.includes(searchValue)) {
        Alert.alert(null, "You've already added this to your Favourites!"); //no title
      } else {
        Alert.alert(null, drinkData.strDrink + " has been added to your Favourites!"); //no title
        favouritesArrayDecoded.push(searchValue);
        AsyncStorage.setItem(
          "favouritesArray",
          JSON.stringify(favouritesArrayDecoded)
        );
      }
      // favouritesArrayDecoded.push(searchValue);
      // console.log(favouritesArrayDecoded);

      // AsyncStorage.setItem(
      //   "favouritesArray",
      //   JSON.stringify(favouritesArrayDecoded)
      // );
    });
  };

  render() {

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
            drinkData.strDrink,
            drinkData.strInstructions,
            ingredientsArrayFinal
          );
        });
    };

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

    let addToFavourites = () => {

      AsyncStorage.getItem("favouritesArray").then((favouritesArray) => {
        const favouritesArrayDecoded = favouritesArray
          ? JSON.parse(favouritesArray)
          : [];
  
        if (favouritesArrayDecoded.includes(this.state.currentDrink)) {
          Alert.alert('Error', "You've already added this to your Favourites!"); //no title
        } else {
          Alert.alert('Success', this.state.currentDrink + " has been added to your Favourites!"); //no title
          favouritesArrayDecoded.push(this.state.currentDrink);
          AsyncStorage.setItem(
            "favouritesArray",
            JSON.stringify(favouritesArrayDecoded)
          );
        }
      });
    }

    let submitSearch = () => {
      console.log('searching....');
      getDataFromAPI(this.state.search); //gets data from api using searched value, adds it to state
      // console.log(this.state.currentDrink);
    }










    

    const { search } = this.state;
    // let ingredientsList = getIngredients();
    //used to return ingredients ^

    const items = this.state.currentIngredients.map(function (item) {
      return <Text style={styles.ingredientsText}> {item} </Text>;
    });

    let showResults = true;

    // if (drinkData.strDrink == null) {
    //   showResults = false;
    // } else {
    //   showResults = true;
    // }

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="eg: Mojito"
          onChangeText={this.updateSearch}
          returnKeyType="search"
          onSubmitEditing={()=> submitSearch()}
          value={search}
        />

        <View
          style={{
            display: showResults ? "none" : "flex",
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
        {/* <View style={styles.dataContainer}> */}
        <View style={{ display: showResults ? "flex" : "none" }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          >
            {/* drink name */}
            <Text style={styles.title}>{this.state.currentDrink}</Text>
            <Text style={styles.titleSub}>
              {'drinkData.strAlcoholic' + " " + 'drinkData.strCategory'}
            </Text>

            {/* ingrdients */}
            <Text style={styles.ingredientsTitle}>INGREDIENTS</Text>
            {items}

            {/* instrictions */}
            <Text style={styles.instructionsTitle}>INSTRUCTIONS</Text>
            <Text style={styles.instructionsText}>
              {'drinkData.strInstructions'}
            </Text>

            {/* drink image */}
            {/* <Image
              style={styles.drinkImage}
              source={{ uri: drinkData.strDrinkThumb }}
            ></Image> */}

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
                onPress={()=> addToFavourites()}
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
    // marginBottom: 50,
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
