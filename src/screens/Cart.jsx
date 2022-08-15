import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useCallback, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CartProducts from "../components/Cart/CartProducts";
import BuyNowBtn from "../components/UI/BuyNowBtn";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { removeAllProductsFromCart, removeAllSelectedItems } from "../store/cartSlice";
import { useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import SelectedItems from "../components/SelectedItems";

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["35%", '45%'];
  const handlePress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  });
  const remove = () => {
      dispatch(removeAllSelectedItems())
      dispatch(removeAllProductsFromCart())
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icons}>
            <AntDesign
              name="left"
              size={20}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Cart</Text>
          <TouchableOpacity style={styles.icons}>
            <Octicons
              name="trash"
              size={20}
              color="black"
              onPress={() => remove()}
            />
          </TouchableOpacity>
        </View>
        <CartProducts />
        <BuyNowBtn setIsOpen={() => handlePress(0)} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetView>
            <SelectedItems data={state.selectedItems} />
          </BottomSheetView>
        </BottomSheet>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
    height: 150,
  },
  icons: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Cart;
