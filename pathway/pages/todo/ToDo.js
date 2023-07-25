import { StyleSheet, Text, Button, View } from "react-native";
import CheckList from "../../components/CheckList";

export default function ToDo({ navigation }) {
  return (
    <View>
      <Text style={styles.text}> To Do List </Text>
      <View>
        <CheckList
          name={"Legal Docs"}
          percentage={"75%"}
        ></CheckList>
        <CheckList name={"Marketing"} percentage={"15%"}></CheckList>
        <CheckList name={"Geographic"} percentage={"50%"}></CheckList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 200,
    borderRadius: 3,
    backgroundColor: "E9E4E4",
    display: "flex",
  },
  text: {
    fontSize: 50,
    textAlign: "center",
  },
});
