import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MusicPlayer = () => {
  return (
    <View style={style.container}>
        <Ionicons name="heart-outline" size={30}/>
        <Text>React Native Music Player</Text>
    </View>
  )
}


export default MusicPlayer

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#555',
        alignItems:'center',
        justifyContent:'center',

    }
})

