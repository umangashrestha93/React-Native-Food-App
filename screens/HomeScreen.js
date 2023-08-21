import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../component/Carousel";
import FoodTypes from "../component/FoodTypes";

const HomeScreen = () => {
  return (
    <SafeAreaView>
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
      
    </SafeAreaView>
  );
};

export default HomeScreen;
