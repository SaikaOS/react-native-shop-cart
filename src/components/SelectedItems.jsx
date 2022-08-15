import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const SelectedItems = ({ data }) => {
  const state = useSelector(state => state.cart)
  const prices = data.map(a => a.price)
  const total = prices.reduce((acc, cum) => parseFloat(acc) + parseFloat(cum), 0)
  const sum = total.toFixed(2) * state.count
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginVertical: 15 }}>Selected Item</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.length > 0 ? (
          data && data?.map((a, index) => (
            <View key={index} style={styles.texts}>
              <Text style={styles.title}>{a.title}</Text>
              <Text style={styles.price}>${a.price}</Text>
            </View>
          ))
        ) : (
          <Text style={{textAlign: 'center'}}>No selected items</Text>
        )} 
     <View style={styles.totalWrapper}>
          <View style={styles.totalDiv}>
            <Text style={{ fontSize: 18 }}>Total</Text>
            <Text style={{fontWeight: '700', fontSize: 18}}>${sum}</Text>
          </View>
        <TouchableOpacity activeOpacity={0.8} style={{marginLeft: 15}}>
          <Text style={styles.btn}>Checkout</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  texts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    color: "gray",
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#F2A213",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: 300,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  totalWrapper: {
    marginTop: 20, 
    justifyContent: 'space-between', 
    display: 'flex'
  },
  totalDiv: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginTop: 30
  }
});

export default SelectedItems;
