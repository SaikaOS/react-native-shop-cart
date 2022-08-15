import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from "./src/navigation/Tabs";
import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Cart from "./src/screens/Cart";
import Profile from "./src/screens/Profile";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Provider store={store}>
     <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Tabs} options={{headerShown: false}}/>
        <Drawer.Screen name="Favorites" component={Favorites} options={{headerShown: false}}/>
        <Drawer.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
        <Drawer.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Drawer.Navigator>
     </Provider>
    </NavigationContainer>
  );
}
