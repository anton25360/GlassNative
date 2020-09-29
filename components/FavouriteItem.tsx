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

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name.name}</Text>

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
    fontFamily: "productSans-regular",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 12,
  },
  container: {
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "#f2f7f4",
    margin: 10,
    marginBottom:5,
    borderRadius:5
  },
  btnContainer: {
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
  },
  removeBtn: {
    backgroundColor: "#ff3d54",
    flexGrow: 1,
    padding: 10,
    borderRadius: 3,
    margin: 10,
    marginLeft:5
  },
  viewBtn: {
    backgroundColor: "#50C878",
    flexGrow: 1.2,
    padding: 10,
    borderRadius: 3,
    margin: 10,
    marginRight:5
  },
  btnText: {
    fontFamily: "productSans-regular",
    fontSize: 20,
    textAlign: "center",
  },
});
