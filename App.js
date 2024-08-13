import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MusicPlayer from './screens/MusicPlayer'

const App = () => {
  return (
    <View style={style.container}>
      <MusicPlayer/>
    </View>
  )
}
const style =StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App


