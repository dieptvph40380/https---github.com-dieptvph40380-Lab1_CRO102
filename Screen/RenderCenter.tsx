import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Title{
    title:string,
}

const RenderCenter = (props : Title) => {
    const {title}=props;
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default RenderCenter

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        
    },
})