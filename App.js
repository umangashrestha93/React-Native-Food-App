import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { Octicons, FontAwesome5 } from '@expo/vector-icons';
import Profile from './screens/Profile'
import MenuScreen from './screens/MenuScreen'


const Tab = createMaterialBottomTabNavigator()

function MaterialTab(){
  return(
    <Tab.Navigator   activeColor="black" inactiveColor='gray' 
    barStyle={{ backgroundColor: '#FFA41B', height: 90, elevation: 10, shadowColor: 'black' }}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon:()=>(<Octicons name="home" size={24} color="black" />)
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon:()=>(<FontAwesome5 name="user" size={24} color="black" />)
      }}/>
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MaterialTab} options={{headerShown: false}}/>
      <Stack.Screen name='menu' component={MenuScreen} options={{headerShown: false}}/>
      
    </Stack.Navigator>
  )
}


const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
            <StackNavigator />
      </NavigationContainer>
    </View>
  )
}

export default App
