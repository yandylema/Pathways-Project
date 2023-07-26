import { StyleSheet, Text, View } from "react-native";

export default function GradientCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}> {props.text} </Text>
      </View>
      <View>
        <View style={styles.containerInside}>{props.children}</View>
      </View>
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
    backgroundImage: "linear-gradient(to left, #AF02CB, #AD00FF)",
    textAlign: "left",
    paddingLeft: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "30",
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
  },
  containerInside: {
    width: "100%",
    // height: 200,
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 20,
    paddingTop: 17
  },
});
