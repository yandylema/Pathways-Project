import { Text, Button, View, TextInput, SafeAreaView, StyleSheet} from "react-native";
import { useState } from "react";

const InputField = (props) => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "Jost",
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 30,
    borderColor: "#D5D8DE",
    borderRadius: 10,
    fontSize: 15
  },
});

export default InputField;