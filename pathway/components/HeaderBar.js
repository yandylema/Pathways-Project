import React from "react";
import { View, Image, StyleSheet } from "react-native";
const pathway = require("../assets/pathway.png");

const HeaderBar = () => {
  return (
      <Image
        source={pathway}
        style={styles.image}
      />
  );
};



const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 60,
    resizeMode: 'contain'
  }
});

export default HeaderBar;
