import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const PurpleButton = (props) => {
  const content = (
    <View style={[styles.button, styles.shadowProp]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    backgroundImage: "linear-gradient(to right, #BD00FF, #AF02CB)",
    width: 380,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    
  },
  text: {
    color: "white",
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

export default PurpleButton;
