import { StyleSheet, Text, View } from "react-native";

function PageTitle(props) {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#323941",
    fontSize: 25,
    fontFamily: "Jost",
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
});

export default PageTitle;
