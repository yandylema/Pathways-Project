import { StyleSheet, Text, View } from "react-native";

export default function Tasks(props) {
  let flag = props.styleprops;
  return (
    <View>
      <Text> To-do Tasks </Text>
      {flag ? <Text> Hello </Text> : <Text> Bye</Text>}
      <Text style={{ fontWeight: "bold" }}> 1. Submit tax form </Text>
      <Text style={{ fontWeight: "bold" }}> 2. Submit tax form </Text>
    </View>
  );
}
