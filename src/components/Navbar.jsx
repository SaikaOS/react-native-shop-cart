import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClickedID } from "../store/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const lists = ["Chair", "Bed"];
  const handlePress = (id) => {
    dispatch(setClickedID(id));
  };
  return (
    <View style={[styles.wrapper,
      state.inputFocus === true ? {display: 'none'} : {display: 'flex'}
    ]}>
      {lists.map((list, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          activeOpacity={0.7}
          underlayColor="#DDDDDD"
          key={index}
        >
          <Text
            key={index}
            style={[
              styles.btn,
              index === state.clickedID ? styles.active : styles.default,
            ]}
          >
            {list}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: 250,
    marginLeft: 30,
  },
  btn: {
    fontSize: 16,
    minWidth: 100,
    borderRadius: 25,
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: "white",
  },
  active: {
    color: "white",
    backgroundColor: "#F2A213",
  },
  default: {
    color: "black",
    backgroundColor: "#F5F7FC",
  },
});

export default Navbar;
