import {
  Text,
  Button,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useState } from "react";

const InputField = (props) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(e) => props.onChange(e)}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "Jost",
    height: 70,
    margin: 12,
    borderWidth: 3,
    width: 380,
    padding: 30,
    borderColor: "#D5D8DE",
    borderRadius: 10,
    fontSize: 15,
  },
});

export default InputField;
