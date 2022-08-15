import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { selectedItem, unSelectedItem } from "../../store/cartSlice";

const RadioButton = ({toggle, setToggle}) => {
  return (
    <TouchableOpacity onPress={() => setToggle(!toggle)} style={{ padding: 10 }}>
      <View style={styles.outside}>
        {toggle === true && <View style={styles.selected}></View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outside: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 5,
    height: 20,
    width: 20,
    borderRadius: 50,
    position: "relative",
  },
  selected: {
    backgroundColor: "orange",
    height: 10,
    width: 10,
    position: "absolute",
    top: 4,
    left: 4,
    borderRadius: 50,
  },
});

export default RadioButton;
