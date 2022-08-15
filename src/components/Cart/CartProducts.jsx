import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartProducts = () => {
  const state = useSelector((state) => state.cart);
  const renderItem = ({ item }) => (
      <CartItems {...item}/>
  )
  return (
    <View style={styles.container}>
      {state.cartProducts.length > 0 ? (
        <FlatList
          data={state.cartProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>Cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
});

export default CartProducts;
