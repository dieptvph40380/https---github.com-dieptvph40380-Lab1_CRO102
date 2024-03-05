import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RenderCenter from './Screen/RenderCenter'
import RenderLeft from './Screen/RenderLeft'
import RenderRight from './Screen/RenderRight'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Hearder}>
        <RenderLeft />
        <RenderCenter title='andjad'/>
        <RenderRight />
      </View>
      <View style={styles.Hearder}>
        <RenderLeft />
        <RenderCenter title='andjad'/>
        <RenderRight />
      </View>
      <View style={styles.Hearder}>
        <RenderLeft />
        <RenderCenter title='andjad'/>
        <RenderRight />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    
  },
  Hearder: {
    padding:10,
    alignItems:'center',
    flexDirection: "row",
    justifyContent:'space-between',
    backgroundColor: 'red',
    borderBottomWidth:2,
  },
})