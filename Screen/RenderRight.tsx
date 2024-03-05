import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderRight = () => {
  return (
    <View>
      <Image style={styles.IconRight} source={{uri : 'https://tse3.mm.bing.net/th?id=OIP.b2BTEu-BRoab1A5qHW2HBAHaEo&pid=Api&P=0&h=180'}}/>
    </View>
  )
}

export default RenderRight

const styles = StyleSheet.create({
    IconRight:{
        marginRight:10,
        width : 30 , 
        height : 30 , 
        borderRadius: 1000,
    },
})