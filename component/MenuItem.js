import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import {
  AntDesign,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ data }) => {
  console.log(data);
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <Pressable
        style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate("menu", { id: data.id,name: data.name, image: data.image, rating: data.rating, time:data.time,
        address: data.adress, cost_for_two:data.cost_for_two, cuisines: data.cuisines, menu: data.menu })}
      >
        <View>
          <Image
            source={{ uri: data.image }}
            style={{ aspectRatio: 4 / 5, height: 150, borderRadius: 8 }}
          />
        </View>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: "500" }}>
            {data.name}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <AntDesign
              name="star"
              size={20}
              color="green"
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 3 }}>{data.rating}</Text>
            <Text style={{ marginLeft: 20 }}>{data.time} mins</Text>
          </View>
          <View>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
                color: "gray",
                fontSize: 16,
              }}
            >
              {data.adress}
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Foundation name="dollar" size={24} color="black" />
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: "500" }}>
              {data.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <MaterialCommunityIcons
              name="bike-fast"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 5, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;
