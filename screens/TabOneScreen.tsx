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
      console.log(result);

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
          // containerStyle={{backgroundColor:'transparent', }}
          placeholder='eg: Mojito'
          onChangeText={this.updateSearch}
          value={search}
        // lightTheme={true}
        />

        <Text style={styles.title}>{search}</Text>
        <SearchResults></SearchResults>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    // borderWidth: 2
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'productSans-regular',
  }
});
