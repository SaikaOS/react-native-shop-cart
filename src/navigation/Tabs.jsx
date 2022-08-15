import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: { ...styles.tab },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name="home"
                size={18}
                color="gray"
                style={{
                  backgroundColor: focused ? "#F2A213" : "#fff",
                  color: focused ? "#fff" : "gray",
                  borderRadius: focused ? 50 : 0,
                  padding: focused ? 10 : 0,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="star-outline"
                size={18}
                color="gray"
                style={{
                  backgroundColor: focused ? "#F2A213" : "#fff",
                  color: focused ? "#fff" : "gray",
                  borderRadius: focused ? 50 : 0,
                  padding: focused ? 10 : 0,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name="handbag"
                size={18}
                color="gray"
                style={{
                  backgroundColor: focused ? "#F2A213" : "#fff",
                  color: focused ? "#fff" : "gray",
                  borderRadius: focused ? 50 : 0,
                  padding: focused ? 10 : 0,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Octicons
                name="person"
                size={18}
                color="gray"
                style={{
                  backgroundColor: focused ? "#F2A213" : "#fff",
                  color: focused ? "#fff" : "gray",
                  borderRadius: focused ? 50 : 0,
                  padding: focused ? 10 : 0,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 100,
    borderRadius: 15,
    elevation: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: 'transparent',
  },
});

export default Tabs;
