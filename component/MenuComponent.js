import { View, Text, Image } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import {FontAwesome} from "@expo/vector-icons"

const MenuComponent = ({food}) => {
    console.log(food)
  return (
    <View>
      <Pressable style={{margin: 10, flexDirection: 'row', alignItem: 'center', justifyContent: 'space-between'}}>
        <View>
            <Text style={{fontSize: 18, fontWeight: '600'}}>{food.name}</Text>
            <Text style={{marginTop:5, fontSize: 16}}>$ {food.price}</Text>
            <Text style={{marginTop: 5}}>
              {[0,0,0,0,0].map((en,i)=>(
                <FontAwesome
                  style={{paddingHorizontal: 3,}}
                  name={i < Math.floor(food.rating)?"star": "star-o"}
                  size={15}
                  color="#FFD708"
                />
              ))}
            </Text>
            <Text style={{width: 180, marginTop: 5, color: "gray", fontSize: 16}}>{food.description.length > 30 ? food.description.substr(0,35) + "...": food.description}</Text>
        </View>
        <Pressable style={{marginRight: 10}}>
          <Image source={{uri: food.image}} style={{width: 120, height: 120, borderRadius: 8}}/>
        </Pressable>
      </Pressable>
    </View>
  )
}

export default MenuComponent