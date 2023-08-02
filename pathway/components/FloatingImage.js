import React, { useState, useEffect } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

const FloatingImage = () => {
  const [positionValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startFloating();
  }, []);

  const startFloating = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(positionValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(positionValue, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const floatInterpolate = positionValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [30, 0, -30], // Adjust this value for the desired floating height
  });

  return (
    <Animated.Image
      source={require("../assets/splashImage3.png")}
      style={[
        styles.floatingImage,
        { transform: [{ translateY: floatInterpolate }] },
      ]}
    />
  );
};
export default FloatingImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  caption: {
    textAlign: "center",
    color: "white",
    fontFamily: "Jost",
    fontSize: 20,
    fontWeight: "300",
  },
  floatingImage: {
    width: 250,
    height: 300,
    marginBottom: 20,
  },
});
