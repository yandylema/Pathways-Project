import { Text, ScrollView, View, StyleSheet } from "react-native";
import InputField from "../../components/InputField";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";

export function Form({ navigation, route }) {
  const inputs = route.params.inputs;
  // Initialize an array of state variables for checkboxes
  const [checkedStates, setCheckedStates] = useState(inputs.map(() => false));

  // Function to update the state for a specific checkbox
  const handleCheckboxChange = (index) => {
    setCheckedStates((prevCheckedStates) => {
      const newState = [...prevCheckedStates];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {inputs.map((input, index) => (
        <View>
          <Text style={styles.text}>{input.name}</Text>
          {input.type == "checkbox" && input.length === 1 ? (
            <View style={styles.checkboxContainer}>
              <Text style={{ fontWeight: "bold" }}>{input.answer1} </Text>
              <Checkbox
                style={styles.checkbox}
                value={checkedStates[index]} // Use the individual state variable
                onValueChange={() => handleCheckboxChange(index)}
                color={checkedStates[index] ? "#4630EB" : undefined}
              />
            </View>
          ) : null}
          {input.type == "checkbox" && input.length === 2 ? (
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={checkedStates[index]} // Use the individual state variable
                onValueChange={() => handleCheckboxChange(index)}
                color={checkedStates[index] ? "#4630EB" : undefined}
              />
              <Checkbox
                style={styles.checkbox}
                value={checkedStates[index+1]} // Use the individual state variable
                onValueChange={() => handleCheckboxChange(index+1)}
                color={checkedStates[index+1] ? "#4630EB" : undefined}
              />
            </View>
          ) : null}
          {input.type == "text" ? <InputField></InputField> : null}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Jost",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row", // Arrange checkboxes horizontally
    alignItems: "center", // Align checkboxes to the center vertically
  },
  checkbox: {
    alignSelf: "center",
    height: 20,
    width: 20,
    marginRight: 10,
    marginTop: 10, // Add some spacing between checkboxes
  },
});
