import { StyleSheet, Text, View } from "react-native";

export default function Tasks(props) {
  return (
    <View>
      <Text> To-do Tasks </Text>
      <Text style={{ textTransform: "bold" }}> 1. Submit tax form </Text>
      <Text style={{ textTransform: "bold" }}> 2. Submit tax form </Text>
    </View>
  );
}
