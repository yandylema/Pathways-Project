import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
 

export default function GradientCard(props) {
  return (
    <View style={styles.container}>
      <LinearGradient style={[styles.containerTitle]} start={{x:1, y:0}} end={{x:0, y: 0}} colors={["#AF02CB", "#AD00FF"]}>
        <Text style={styles.title}> {props.text} </Text>
        </LinearGradient>
      <LinearGradient style={styles.containerInside} colors={["#e3d3ed", "#e9dfef"]}>
      {props.children}
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 370,
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 12
  },
  containerTitle: {
    width: "100%",
    textTransform: "uppercase",
    textAlign: "left",
    paddingLeft: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
  },
  containerInside: {
    width: "100%",
    textAlign: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 20,
    paddingTop: 17
  },
});
