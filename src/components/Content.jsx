import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { setInputFocus, setInputValue } from "../store/cartSlice";

const Content = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.cart)
  const handleText = (a) => {
    dispatch(setInputValue(a))
  }
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>Choose Your Best Furniture</Text>
        <Text style={styles.desc}>high quality furniture</Text>
      </View>
      <TextInput 
      style={styles.input} 
      placeholder="Search.." 
      value={state.inputValue}
      onChangeText={handleText}
      />
      <AntDesign name="search1" color='gray' size={20} 
      style={{position: 'absolute', top: 145, left: 20,}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: 180,
    marginLeft: 30,
  },
  texts: {
    textAlign: 'left',
    width: '70%',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  desc: {
    fontSize: 16,
    color: "gray",
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    paddingLeft: 50,
    height: 50,
    width: 320,
  },
});

export default Content;
