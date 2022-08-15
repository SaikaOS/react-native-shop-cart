import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.linesWrapper}>
          <View style={styles.longerLine}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={require("./dog.jpg")}
          height={50}
          width={50}
          style={{ marginRight: 30, borderRadius: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    width: "100%",
  },
  linesWrapper: {
    display: "flex",
    justifyContent: "center",
    width: 50,
    marginLeft: 30,
  },
  longerLine: {
    backgroundColor: "black",
    height: 2,
    width: 30,
    marginVertical: 4,
  },
  line: {
    backgroundColor: "black",
    height: 2,
    width: 20,
    marginVertical: 4,
  },
});

export default Header;
