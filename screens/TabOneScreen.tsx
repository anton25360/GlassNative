import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { SearchBar } from 'react-native-elements';

// import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'




//start render
export default class TabOneScreen extends Component {
  state = {
    search: '',
  };

  updateSearch = (search:string) => {
    this.setState({ search });
    console.log(search);
    // this.props.onUserSearch(search);
    // this.props.name('hello')

  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        {/* <SearchBar getSearch={printThis} ></SearchBar> */}


        <SearchBar
          placeholder='eg: Mojito'
          onChangeText={this.updateSearch}
          value={search}
        />



    <Text>{search}</Text>
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
