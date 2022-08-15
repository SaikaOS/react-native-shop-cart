import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import { chairs, beds } from "../../data.js";
import { useSelector } from "react-redux";

const Products = () => {
  const state = useSelector((state) => state.cart);
  const filteredProducts = [...chairs, ...beds].filter((a) => {
    return a.title.toLowerCase().includes(state.inputValue && state.inputValue.toLowerCase());
  });
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {state.inputValue ? (
        filteredProducts.map((item, index) => (
          <ProductItem key={index} title={item.title} desc={item.desc} 
          image={item.image} price={item.price} quantity={item.quantity}/>
        ))
      ) : state.clickedID === 0 ? (
        chairs.map((item, index) => (
          <ProductItem key={index} title={item.title} desc={item.desc} 
          image={item.image} price={item.price} quantity={item.quantity}/>
        ))
      ) : (
        beds.map((item, index) => (
          <ProductItem key={index} title={item.title} desc={item.desc} 
          image={item.image} price={item.price} quantity={item.quantity}/>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: 30,
    marginTop: 20,
    height: 350,
    width: 320,
  },
});

export default Products;
