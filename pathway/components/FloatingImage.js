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
          toValue: 15,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(positionValue, {
          toValue: -15,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <Animated.Image
      source={require("../assets/splashimage2.png")}
      style={[
        styles.floatingImage,
        { transform: [{ translateY: positionValue }] },
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
    width: 230,
    height: 300,
    marginBottom: 20,
  },
});
