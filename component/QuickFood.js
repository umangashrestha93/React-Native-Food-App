import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import QuickFoodData from '../data/QuickFoodData'
import { AntDesign } from '@expo/vector-icons';

const QuickFood = () => {
    const data = QuickFoodData
  return (
    <View style={{margin: 10}}>
      <Text style={{fontSize: 16, marginBottom: 6, color: 'black', fontWeight: '500'}}> Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((items, index)=>(
        <Pressable style={{margin:10}} key={`data${index}`}>
            <ImageBackground source={{uri: items.image}} style={{aspectRatio: 5/6, height: 170}} imageStyle={{borderRadius: 6}}>
                <Text style={{fontSize: 27, fontWeight: '900', color: 'white', top: '75%'}}>{items.offer} OFF</Text>

            </ImageBackground>
            <Text style={{fontSize: 16, fontWeight: '500', marginTop: 5}}>{items.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 5}}>
            <AntDesign name="star" size={20} color="green" />
            <Text style={{marginLeft:7}}>{items.rating}</Text>
            <Text style={{marginLeft: 12}}>{items.time} mins</Text>
                
            </View>
        </Pressable>
      ))}
      </ScrollView>
      
    </View>
  )
}

export default QuickFood