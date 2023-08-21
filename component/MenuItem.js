import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const MenuItem = ({ data }) => {
  console.log(data);
  return (
    <View style={{ margin: 10 }}>
      <Pressable style={{ flexDirection: "row" }}>
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
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
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
            <Text style={{ marginLeft: 10, marginTop: 3, color: "gray", fontSize: 16 }}>
              {data.adress}
            </Text>
          </View>
        </View>

        <View></View>
      </Pressable>
    </View>
  );
};

export default MenuItem;
