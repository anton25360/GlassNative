import * as React from 'react';
import { StyleSheet } from 'react-native';
// import { SearchBar } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import SearchBar from '../components/SearchBar'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text>Hello!</Text>
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
