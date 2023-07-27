import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PurpleButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button, styles.shadowProp]}> 
    <LinearGradient colors={["#BD00FF", "#AF02CB"]} style={styles.lG} start={{x:1, y:0}} end={{x:0, y: 0}} >
      <Text style={styles.text}>{props.text}</Text>
    </LinearGradient>
    </TouchableOpacity>
  );

};

const styles = StyleSheet.create({
  button: {
    width: "96%",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    
  },
  lG: {
    width: "100%",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    
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
    elevation: 5
  },
});

export default PurpleButton;
