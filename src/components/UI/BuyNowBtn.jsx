import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BuyNowBtn = ({setIsOpen}) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => setIsOpen(true)}>
      <View>
      <Text style={styles.text}>Buy Now</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F2A213",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white'
  }
})

export default BuyNowBtn