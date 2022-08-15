import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Don't worry. This screen will update later.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Favorites