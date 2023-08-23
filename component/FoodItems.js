import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import {Entypo  } from '@expo/vector-icons';
import MenuComponent from './MenuComponent';

const FoodItems = ({data}) => {
    console.log(data)
    const foodData = [data]
    const [selected, setSelected] = useState(["Recommended"])
    const handleSelected =(item)=>{
            const selectedItem = selected.find((c)=> c === item)
            if(selectedItem){
                setSelected(selected.filter((sel)=> sel !== item))
            }else{
                setSelected([...selected, item])
            }
    }
  return (
    <View style={{margin: 10}}>
      {
        foodData.map((item, i)=>(
            <>
            <Pressable key={`foodData${i}`} onPress={()=>handleSelected(item.name)}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>{item.name}</Text>
                <Entypo name="chevron-small-down" size={24} color="black" />
            </Pressable>
            {selected.includes(item.name)? (item.items.map((food, index)=>(
                <MenuComponent food={food} key={`item${index}`}/>
            ))):null}
            </>
        ))
      }
    </View>
  )
}

export default FoodItems