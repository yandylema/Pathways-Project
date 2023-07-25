import { StyleSheet, Text, Button, View } from "react-native";
import CheckList from "../../components/CheckList";
import { useState } from "react";
import Tasks from "../../components/Tasks";

export default function ToDo({ navigation }) {
  const [click, setClick] = useState(false);
  return (
    <View>
      <Text style={styles.text}> To Do List </Text>
      <View onPress={() => setClick((click) => !click)}>
        <CheckList name={"Legal Docs"} percentage={"75%"}></CheckList>
        {/* if user pressed on it -> change clicked from false to true -> show the to do tasks.  */}
        {/* {click ? (
          <Tasks> </Tasks>
        ) : (
          <Tasks style={{ display: "none" }}></Tasks>
        )} */}
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
