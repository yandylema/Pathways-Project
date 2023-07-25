import { View, StyleSheet } from "react-native";

export function BusinessPopup() {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "50vh",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
      </View>
    </View>
  );
}
