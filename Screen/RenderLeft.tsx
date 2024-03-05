import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderLeft = () => {
  return (
    <View>
      <Image style={styles.IconLeft} source={require('../IMG/back-button.png')} />
    </View>
  )
}

export default RenderLeft

const styles = StyleSheet.create({
  IconLeft: {
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 1000,
  },
})