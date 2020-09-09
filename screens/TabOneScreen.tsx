import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { SearchBar } from 'react-native-elements';

//custom components
import SearchResults from '../components/SearchResults'

//get cocktail data
let getData = (input: string) => {
  console.log('calling api...');
  console.log(input);

  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      var result = data.drinks[0] //gets 1st result
      console.log(result.strAlcoholic);
    })
}

//start render
export default class TabOneScreen extends Component {
  state = {
    search: '',
  };

  updateSearch = (search: string) => {
    this.setState({ search });
    getData(search)

  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>

        <SearchBar
          placeholder='eg: Mojito'
          onChangeText={this.updateSearch}
          value={search}
        />

        <View style={styles.dataContainer}>
          {/* drink name */}
          <Text style={styles.title}>{'Mojito'}</Text> 
          <Text style={styles.titleSub}>Alcoholic Drink</Text>

          {/* ingrdients */}
          <Text style={styles.ingredients}>INGREDIENTS</Text>
          <Text>1 sugar</Text>
          <Text>2 lime</Text>
          <Text>soda water</Text>

          {/* instrictions */}
          <Text style={styles.ingredients}>INSTRUCTIONS</Text>
          <Text>LALALA</Text>
          <Text>LALALAL</Text>
          <Text>ALLALA</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //fullscreen
  },
  dataContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    // fontWeight: 'bold',
    fontFamily: 'productSans-bold',
    marginTop: 40
  },
  titleSub: {
    fontSize: 17,
    // fontWeight: 'bold',
    fontFamily: 'productSans-regular',
    marginTop: 10
  },
  ingredients: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'productSans-bold',
    marginTop: 20
  }

});
