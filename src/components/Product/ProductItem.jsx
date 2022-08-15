import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToCard, removeItemFromCart } from "../../store/cartSlice";

const ProductItem = ({ title, desc, price, image, quantity }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.cart)
  const fun = () => {
  if(state.isAdded === true) {
    dispatch(removeItemFromCart(title))
  }
  dispatch(addProductsToCard({title: title, price: price, img: image, quantity: quantity}))
  }
  return (
    <TouchableOpacity activeOpacity={0.7} 
    onPress={() => fun()}>
      <View style={styles.card}>
        <View style={styles.imgWrapper}>
          <Image
            source={image}
            height={100}
            width={100}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginRight: 30 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <View style={styles.stars}>
            <FontAwesome name="star" color="orange" />
            <FontAwesome name="star" color="orange" />
            <FontAwesome name="star" color="orange" />
            <FontAwesome name="star" color="orange" />
            <FontAwesome name="star" color="orange" />
          </View>
          <Text style={styles.title}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F5F7FC",
    height: 150,
    marginVertical: 10,
    borderRadius: 15,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    color: "gray",
    marginTop: 5,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  imgWrapper: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default ProductItem;
