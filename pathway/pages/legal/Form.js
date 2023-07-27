import { Text, ScrollView, View, StyleSheet } from "react-native";
import InputField from "../../components/InputField";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import PurpleButton from "../../components/PurpleButton";

export function Form({ navigation, route }) {
  const inputs = route.params.inputs;
  // Initialize an array of state variables for checkboxes
  const [checkedStates, setCheckedStates] = useState(inputs.map(() => false));
  // Function to update the state for a specific checkbox
  const handleCheckboxChange = (questionIndex, answerIndex) => {
    setQuestionAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex][answerIndex].isChecked =
        !newAnswers[questionIndex][answerIndex].isChecked;
      return newAnswers;
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {/* {inputs.map((input, index) => (
        <View key={input.name}>
          <Text style={styles.text}>{input.name}</Text>

          {input.type == "checkbox" ? (
            <View style={styles.checkboxContainer}>
              {input.answers.map((a, id) => (
                {(index = index + 1)}
                
                <View key={id}>
                  <Text style={{ fontSize: 15 }}>{a}</Text>
                  <Checkbox
                    style={styles.checkbox}
                    value={checkedStates[id + index]}
                    onValueChange={() => handleCheckboxChange(id + index)}
                    color={checkedStates[id + index] ? "#4630EB" : undefined}
                  /> */}
      <View>
        {inputs.map((answers, questionIndex) => (
          <View key={questionIndex}>
            <Text>Question {inputs.question}</Text>
            {inputs.type == "checkbox" ? (
              <View style={styles.checkboxContainer}>
                {inputs.answers.map((answer, answerIndex) => (
                  <>
                    <Text>{answers.label}</Text>
                    <Checkbox
                      value={answers.isChecked}
                      onValueChange={() =>
                        handleCheckboxChange(questionIndex, answerIndex)
                      }
                    />
                  </>
                ))}
              </View>
            ) : null}
          </View>
        ))}
      </View>
      <PurpleButton
        onPress={() => {
          navigation.navigate("PDFPage");
        }}
        text="Generate PDF"
      ></PurpleButton>
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
