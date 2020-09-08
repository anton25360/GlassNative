import React, {useState, Component} from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
// import SearchScreen from '../components/SearchScreen'

export default class TabOneScreen extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <SearchBar ></SearchBar>
        <Text>Hello!2</Text>
        <SearchResults></SearchResults>
      </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
