import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { removeItemFromCart, removeSelectedItems } from "../store/cartSlice";

const CountOfProducts = ({title, quantity}) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch()
  const remove = () => {
    if(count === 1) {
      dispatch(removeItemFromCart(title))
      dispatch(removeSelectedItems(title))
    } else {
      setCount(count - 1)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[count === 1 ? styles.countOne : styles.btn]}
        onPress={() => remove()}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 90,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#4A4B7C",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  countOne: {
    backgroundColor: "gray",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default CountOfProducts;
