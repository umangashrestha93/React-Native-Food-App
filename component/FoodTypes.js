import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [{
        id: "0",
        image: "https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=",
        name: "Biryani"
    },
    {
        id: "1",
        image: "https://media.istockphoto.com/id/1292635321/photo/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.jpg?s=612x612&w=0&k=20&c=NyxQvDnBq7Ki09Zi21JEMxpuZ_uVr45ZBSavqXJ2T1s=",
        name: "Momo"
    },
    {
        id:"2",
        image: "https://cdn.tasteatlas.com/Images/Dishes/fde953e5aa504e8c83a84691582b0399.jpg?m=facebook",
        name: "Sushi"
    },
    {
        id: "3",
        image: "https://st3.depositphotos.com/16088226/18476/i/450/depositphotos_184761498-stock-photo-close-tasty-steaming-chicken-sizzler.jpg",
        name: "Sizzler"
    },
    {
        id: "4",
        image: "https://media.istockphoto.com/id/1189472743/photo/kimchi-fried-rice-korean-food.jpg?s=612x612&w=0&k=20&c=aCTQf_Kz5Ol7xzx-X-z2aKKA52b--BEwC9tWSJo7sKo=",
        name: "Kimchi Rice"
    }
]
  return (
    <View>
        <View style={{backgroundColor: 'orange', width: '50%', justifyContent:'center',alignItems: 'center', marginTop: 7, height: '17%', marginLeft: 10, borderRadius: 7}}>
        <Text style={{fontSize: 20, marginLeft: 10, color: 'white',}}>Our Famous Dishes</Text>
        </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        types.map((item, index)=>(
            <View style={{margin: 9}} key={index}>
                <Image source={{uri: item.image}} style={{width: 60, height: 60, borderRadius: 30}}/>
                <Text style={{fontSize: 12, fontWeight: '500', textAlign: 'center', marginTop: 5}}>{item.name}</Text>
            </View>
        ))
      }
    </ScrollView>
    </View>
  )
}

export default FoodTypes