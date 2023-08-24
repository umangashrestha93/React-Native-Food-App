import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Foundation, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import FoodItems from "../component/FoodItems";
import { ScrollView } from "react-native-gesture-handler";

const MenuScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  return (
    <>
    <ScrollView style={{marginTop: 35}}>
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
            <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center'}}>
            <AntDesign
              name="star"
              size={20}
              color="green"
            />
                <Text style={{marginLeft: 3, fontSize: 16}}>{route.params.rating}</Text>
                <Text style={{marginLeft: 10}}>.</Text>
                <Text style={{marginLeft: 10, fontSize: 16}}>{route.params.time} mins</Text>
            </View>
            <View >
                <Text style={{marginLeft: 10, fontSize: 16, color: 'gray', marginTop: 10}}>{route.params.cuisines}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                <Text style={{fontSize: 16, fontWeight:'600', marginLeft: 10}}>Outlet</Text>
                <Text style={{marginLeft: 10, fontSize: 16, color: 'gray'}}>{route.params.address}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>22 mins</Text>
                <Text style={{marginLeft: 10, fontSize:16, fontWeight: '600'}}> Home</Text>
            </View>
            <Text style={{borderWidth: 0.5, height: 1, borderColor: 'gray', marginTop: 12}}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <FontAwesome5 name="bicycle" size={22} color="#FFA41B" style={{marginLeft: 10}}/>
                <Text style={{marginLeft: 10, fontSize: 15, color: 'gray'}}>0-3 kms   |</Text>
                <Text style={{marginLeft: 10, fontSize: 15, color: 'gray'}}>35 delivery fee will apply</Text>
            </View>
        </View>
      </View>
      <Text style={{fontSize: 17, textAlign: 'center', marginTop: 10, fontWeight: 500}}>MENU</Text>
      <Text style={{borderWidth: 0.4, height: 1, borderColor: 'gray', marginTop: 10}}></Text>
      {route.params.menu.map((item, index)=>(
        <FoodItems data={item} key={`route${index}`}/>
      ))}
    </ScrollView>
    </>
  );
};

export default MenuScreen;
