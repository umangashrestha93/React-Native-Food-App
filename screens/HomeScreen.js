import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../component/Carousel";
import FoodTypes from "../component/FoodTypes";
import QuickFood from "../component/QuickFood";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import Hotels from "../data/Hotels";
import MenuItem from "../component/MenuItem";

const HomeScreen = () => {
    const HotelData = Hotels
  return (
    <>
    <StatusBar />
    <ScrollView style={{marginTop: 36}}>
        
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.5,
          margin: 10,
          padding: 10,
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="Search for Resturant" />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      {/**Image Slider */}
      <Carousel />
      {/**Types of dishes */}
      <FoodTypes />
      {/**QuickFood */}
      <QuickFood />
      {/**filter button */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Pressable style={{margin: 10, flexDirection: 'row', borderWidth: 0.6,borderColor:'gray', padding: 10, width: 80, borderRadius: 50, justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{color:'gray'}}>filter</Text>
        <Ionicons name="filter" size={24} color="black" />
      </Pressable>
      <Pressable style={{margin: 10, flexDirection: 'row', borderWidth: 0.6,borderColor:'gray', padding: 10, width: 120, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'gray'}}>Sort by rating</Text>
      </Pressable>
      <Pressable style={{margin: 10, flexDirection: 'row', borderWidth: 0.6,borderColor:'gray', padding: 10, width: 120, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'gray'}}>Sort by price</Text>
      </Pressable>
      </View>
      {HotelData.map((item, index)=>(
        <MenuItem data={item} key={`HotelData${index}`}/>
      ))}
      
      
    </ScrollView>
    </>
  );
};

export default HomeScreen;
