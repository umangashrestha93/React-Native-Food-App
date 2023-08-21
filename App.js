import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HomeScreen />
    </View>
  )
}

export default App