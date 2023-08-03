import { Text, ScrollView, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import PurpleButton from "../../components/PurpleButton";
import Dropdown from "../../components/DropdownChecklist";
import PageTitle from "../../components/PageTitle";
import InputField from "../../components/InputField";
import { getDatabase, ref, update } from "firebase/database";

export function Form({ navigation, route }) {
  const inputs = route.params.inputs;
  const [questionIndexUpdate, setQuestionIndexUpdate] = useState(0);

  //input starts here
  const [inputValues, setInputValues] = useState(() => {
    return inputs.filter((i) => i.type === "text").map((j) => (j.answer = " ")); // Initialize each answer with an empty string
  });
  console.log("xyz", inputs[0].answer);
  inputs.map((i) => {
    console.log("the answer ", i.answer);
  });

  const handleInputBoxChange = (questionIndex, e) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[questionIndex].answer = e.target.value;
      console.log(newInputValues);
      setQuestionIndexUpdate(questionIndex + 1);
      return newInputValues;
    });
  };

  console.log("update question ", questionIndexUpdate);

  //checkbox starts here
  const [checkedStates, setCheckedStates] = useState(() => {
    return inputs
      .filter((type) => type.type === "checkbox")
      .map((question) => question.answers.map((i) => (i.isChecked = false)));
  });
  console.log("checked states are", checkedStates);

  const handleCheckboxChange = (answerIndex) => {
    setCheckedStates((prevCheckedStates) => {
      const newCheckedStates = [...prevCheckedStates];
      newCheckedStates[0][answerIndex] = !newCheckedStates[0][answerIndex];
      return newCheckedStates;
    });
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

  const database = getDatabase();

  const updateData = (questionIndex) => {
    if (questionIndex === 1) {
      update(ref(database, "businesses/1/completed_forms/"), {
        1: true,
      });
    } else if (questionIndex === 2) {
      update(ref(database, "businesses/1/completed_forms/"), {
        2: true,
      });
    } else if (questionIndex === 4) {
      update(ref(database, "businesses/1/completed_forms/"), {
        4: true,
      });
    } else if (questionIndex === 3) {
      update(ref(database, "businesses/1/completed_forms/"), {
        3: true,
      });
    } else if (questionIndex === 5) {
      update(ref(database, "businesses/1/completed_forms/"), {
        5: true,
      });
    } else if (questionIndex === 6) {
      update(ref(database, "businesses/1/completed_forms/"), {
        6: true,
      });
    }
  };

  const pdf = () => {
    navigation.navigate("PDFPage");
  };

  const combinedFunction = () => {
    pdf();
    updateData(questionIndexUpdate);
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
            {questions.type === "checkbox" ? (
              <View style={styles.checkboxContainer}>
                {questions.answers.map((answer, answerIndex) => (
                  <View key={answerIndex}>
                    <Text>{answer.label}</Text>
                    <Checkbox
                      style={styles.checkbox}
                      value={checkedStates[0][answerIndex]}
                      onValueChange={() => handleCheckboxChange(answerIndex)}
                      color="#4630EB"
                    />
                  </View>
                ))}
              </View>
            ) : null}
            {questions.type === "text" ? (
              <View style={styles.inputContainer}>
                <InputField placeholder="Answer here..." />
              </View>
            ) : null}
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
