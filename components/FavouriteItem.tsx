import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function onViewButtonPress() {
  console.log("view drinks");
}

function onRemoveButtonPress() {
  console.log("remove drinks");
}

export default function FavouriteItem(name: any) {
  // function onViewButtonPress = () => {
  //   console.log('view drink');

  // }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name.name}</Text>
      {/* 
      <Button
        icon={<Icon name="heart-o" size={15} color="white" />}
        title="Add to Favourites"
        buttonStyle={{
          backgroundColor: "#54bf77",
        }}
        raised={true}
        onPress={onViewButtonPress()}
      /> */}


      <TouchableOpacity style={styles.removeBtn} onPress={onRemoveButtonPress}>
        <Text>Remove</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewBtn} onPress={onViewButtonPress}>
        <Text>View</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "blue",
  },
  container: {
    borderColor: "red",
    borderWidth: 2,
  },
  removeBtn: {
    backgroundColor:'coral'
  },
  viewBtn: {
    backgroundColor:'#50C878'

  },
});
