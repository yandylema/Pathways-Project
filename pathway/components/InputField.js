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
  // const [businessName, setBusinessName] = useState("");
  // const [product, setProduct] = useState("");
  // const [message, setMessage] = useState("");
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleMessageChange = (event) => {
  //   setMessage(event.target.value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   // Assuming you want to save the input values to Firebase
  //   const data = {
  //     name: name,
  //     email: email,
  //     message: message,
  //   };
  //   // Call the function passed as a prop to write data to Firebase
  //   props.onWriteData(data);

  //   // Reset the form fields
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(e) => props.onChange(e)}
        value={props.value}
        placeholder={props.placeholder}
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
