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

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.viewBtn} onPress={onViewButtonPress}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.removeBtn}
          onPress={onRemoveButtonPress}
        >
          <Text style={styles.btnText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    // color: "blue",
    fontFamily: "productSans-regular",
    fontSize: 35,
    marginTop: 10,
    marginLeft:12
  },
  container: {
    borderColor: "red",
    borderWidth: 2,
  },
  btnContainer: {
    borderColor: "black",
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
  },
  removeBtn: {
    backgroundColor: "coral",
    flexGrow: 1,
    padding: 10,
    borderRadius: 3,
    margin:10
  },
  viewBtn: {
    backgroundColor: "#50C878",
    flexGrow: 1,
    padding: 10,
    borderRadius: 3,
    margin:10
  },
  btnText: {
    fontFamily: "productSans-regular",
    fontSize:20
  },
});
