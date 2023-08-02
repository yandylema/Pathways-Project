import { Text, ScrollView, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import PurpleButton from "../../components/PurpleButton";
import Dropdown from "../../components/DropdownChecklist";
import PageTitle from "../../components/PageTitle";
import InputField from "../../components/InputField";
import { getDatabase, ref, set, get, update } from "firebase/database";

export function Form({ navigation, route }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const inputs = route.params.inputs;
  const isCheckedFunction = () => {
    // inputs !== "undefined"
    //   ? inputs.map((i) => {
    //       i.type === "checkbox"
    //         ? i.answers.map((j) => {
    //             console.log("loop 2", j);
    //             j.isChecked = false;
    //           })
    //         : console.log("(2)This is undefined, ", i);
    //     })
    //   : console.log("(1) This is undefined, ", inputs);
    //console.log("this is not working");
  };

  const typesOptions = [
    "Sole Proprietorship",
    "Partnership",
    "Limited Liability Company",
    "Limited Liability Partnership",
    "Corporation",
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  //console.log(inputs[0].answers[0].isChecked);
  const [checkedStates, setCheckedStates] = useState(() => isCheckedFunction());
  // Function to update the state for a specific checkbox
  const handleCheckboxChange = (questionIndex, answerIndex) => {
    setCheckedStates((prevCheckedStates) => {
      const newCheckedStates = [...prevCheckedStates];
      newCheckedStates[questionIndex][answerIndex] =
        !newCheckedStates[questionIndex][answerIndex];
      return newCheckedStates;
    });
  };
  const database = getDatabase();
  //error: firebase does not have update() function
  const updateData = () => {
    update(ref(database, "businesses/1/completed_forms/"),
      {
        "1": true,
      }
    );
  };

  const pdf = () => {
    navigation.navigate("PDFPage");
  };
  const combinedFunction = () => {
    pdf();
    updateData();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <PageTitle>Business License Tax Form</PageTitle>

      <Dropdown
        label="Business Type"
        options={typesOptions}
        onSelect={handleOptionSelect}
      />
      <View>
        {inputs.map((questions, questionIndex) => (
          <View key={questionIndex}>
            <Text style={{ fontWeight: "bold", fontSize: 20, margin: 5 }}>
              {questions.question}
            </Text>
            {questions.type == "checkbox" ? (
              <View style={styles.checkboxContainer}>
                {questions.answers.map((answer, answerIndex) => (
                  <>
                    <Text>{answer.label}</Text>
                    <Checkbox
                      style={styles.checkbox}
                      color={true ? "#4630EB" : undefined}
                    />
                  </>
                ))}
              </View>
            ) : (
              <View style={styles.inputContainer}>
                <InputField placeholder="Answer here..." />
              </View>
            )}
          </View>
        ))}
      </View>
      <PurpleButton
        onPress={combinedFunction}
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
