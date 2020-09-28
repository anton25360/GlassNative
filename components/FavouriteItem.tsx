import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavouriteItem(name:any) {
    
  return (
    <View>
          <Text style={styles.name}>{name.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "blue",
  },
});
