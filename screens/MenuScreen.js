import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const MenuScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  return (
    <SafeAreaView>
      <View
        style={{
          height: 300,
          backgroundColor: "#FFA41B",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="search1" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 10 }}>
              Search
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 210,
            marginHorizontal: 30,
            borderRadius: 15,
          }}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>{route.params.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign style={{marginHorizontal:7}} name="sharealt" size={22} color="black" />
                <AntDesign name="hearto" size={22} color="black" />
                </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
