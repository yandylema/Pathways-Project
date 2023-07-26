import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";

export function BusinessPin(props) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: "100%",
        backgroundColor: "white",
        width: 22,
        height: 22,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#747474",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      }}
      onPress={props.onPress}
    >
      <View
        style={{
          borderRadius: "100%",
          backgroundColor: "red",
          width: 16,
          height: 16,
        }}
      ></View>
    </TouchableOpacity>
  );
}
