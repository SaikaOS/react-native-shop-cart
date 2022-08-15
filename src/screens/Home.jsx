import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider, useSelector } from "react-redux";
import { store } from "../store/store";
import Header from "../components/Header";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Products from "../components/Product/Products";

const Home = () => {
  return (
    <Provider store={store}>
      <View style={styles.app}>
      <Header />
      <Content />
      <Navbar />
      <Products />
      <StatusBar style="auto" />
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
    app: {
      display: 'flex',
      justifyContent: 'space-around',
    }
  })

export default Home