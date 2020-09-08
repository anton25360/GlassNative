import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
// import { SearchBar } from 'react-native-elements';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

export default function TabOneScreen() {

  const [search, setSearch] = useState()

  
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text>Hello!2</Text>
      <SearchResults></SearchResults>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
