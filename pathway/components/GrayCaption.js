import { Text, View, StyleSheet } from "react-native";

const GrayCaption = (props) => {
  return (
    <View>
      <Text style={styles.caption}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  caption: {
    fontFamily: "Jost",
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
  },
});

export default GrayCaption;
