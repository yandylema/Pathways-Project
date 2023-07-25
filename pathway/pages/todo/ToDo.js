import { StyleSheet, Text, Button, View } from "react-native";
import CheckList from "../../components/CheckList";
import { useState } from "react";
import Tasks from "../../components/Tasks";

export default function ToDo({ navigation }) {
  const [click, setClick] = useState(true);
  return (
    <View>
      <Text style={styles.text}> To Do List </Text>
      <View>
        <CheckList
          name={"Legal Docs"}
          percentage={"75%"}
        ></CheckList>
        <Tasks styleprop={click}></Tasks>
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
    marginBottom: 8,
  },
});
