import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  console.log('hello');
  
  return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Tab Two</Text>
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  //     <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
  //   </View>
  <View style={styles.view}>
    <Text style={styles.title}>You have no favourites!</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    // fontWeight: 'bold',
    color:'grey',
    // textAlign: 'center', 
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  view: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
