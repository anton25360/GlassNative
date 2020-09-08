import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { SearchBar } from 'react-native-elements';

//custom components
import SearchResults from '../components/SearchResults'

//start render
export default class TabOneScreen extends Component {
  state = {
    search: '',
  };

  updateSearch = (search: string) => {
    this.setState({ search });

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

        <Text style={styles.title}>{search}</Text>
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
    borderColor:'red',
    borderWidth:2
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
