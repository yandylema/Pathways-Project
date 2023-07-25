import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InfoButton from "./InfoButton";

const ButtonWithI = (props) => {
  const content = (
    <View
      style={[
        styles.button,
        styles.shadowProp,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        },
      ]}
    >
      <Text style={styles.text}>{props.text}</Text>
      <InfoButton />
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 320,
    height: 50,
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
  },
  text: {
    color: "black",
    fontSize: 15,
    fontFamily: "Jost",
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#747474",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default ButtonWithI;