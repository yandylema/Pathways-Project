import { View, StyleSheet, Text } from "react-native";

export function ServicesPopup() {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "white",
    height: "50vh",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "Left",
  },
});
