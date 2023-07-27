import { StyleSheet, Text, View } from "react-native";

export default function Tasks(props) {
  let flag = props.styleprops;
  return (
    <View style={{ alignItems: "Left", marginLeft: 25, marginBottom: 25 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}
