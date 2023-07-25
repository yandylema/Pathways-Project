import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const WhiteButton = (props) => {
  const content = (
    <View style={[styles.button, styles.shadowProp]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 380,
    height: 70,
    borderRadius: 15,
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

export default WhiteButton;
