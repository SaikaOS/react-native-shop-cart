import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import RadioButton from "../UI/RadioButton";
import { useDispatch } from "react-redux";
import { addSelectedItems, removeSelectedItems } from "../../store/cartSlice";
import CountOfProducts from "../CountOfProducts";

const CartItems = (props) => {
  const {title, price, image, isSelected = false, quantity = 1} = props
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(isSelected);
 useEffect(() => {
  if (toggle === true) {
    dispatch(addSelectedItems({ title: title, price: price }));
  } else {
    dispatch(removeSelectedItems(title))
  }
 }, [toggle])
  return (
    <View style={styles.item}>
      <RadioButton toggle={toggle} setToggle={setToggle}/>
    <View style={styles.imgWrapper}>
          <Image
            source={image}
            height={100}
            width={100}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <CountOfProducts title={title} quantity={quantity}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 20,
  },
  imgWrapper: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontWeight: "bold",
    marginVertical: 3,
  },
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

export default CartItems;
