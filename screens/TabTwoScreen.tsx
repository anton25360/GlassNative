import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  console.log('hey there');
  
  return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Tab Two</Text>
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  //     <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
  //   </View>
  <Text style={styles.title}>Favs</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'red'
  }
});
