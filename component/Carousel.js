import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://marketplace.canva.com/EAFVfgsKMAE/1/0/1600w/canva-black-and-yellow-simple-minimalist-burger-promotion-banner-YTqWS2eL8TM.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-offer-design-template-3956fe3d76021782dd49e5c64e28ed47_screen.jpg?ts=1634927012",
    "https://marketplace.canva.com/EAFA7cWpMD4/1/0/1600w/canva-orange-red-illustration-traditional-food-for-sale-blog-banner-_mtdzp7Z0HA.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
        ImageComponentStyle={{
            borderRadius: 6,
            width: '94%'
        }}
      />
    </View>
  );
};

export default Carousel;
