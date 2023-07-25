import React from "react";
import { View, Image, StyleSheet } from "react-native";
const pathway = require("../assets/pathway.png");

const HeaderBar = () => {
  return (
    // <View style={styles.container}>
      <Image
        source={pathway}
        style={styles.image}
      />
    // </View>
  );
};



const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});

export default HeaderBar;
