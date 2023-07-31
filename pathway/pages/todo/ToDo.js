import { StyleSheet, Text, Button, View } from "react-native";
import CheckList from "../../components/CheckList";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import Dropdown from "../../components/DropdownChecklist";
import TestingFirebase from "../../components/TestingFirebase";

const purple = require("../../assets/Ellipse5.png");
const red = require("../../assets/Ellipse6.png");
const green = require("../../assets/Ellipse7.png");
const yellow = require("../../assets/Ellipse8.png");

const ToDo = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <PageTitle>To-Do List</PageTitle>
      <View style={styles.container}>
        <Dropdown
          icon={purple}
          label="Legal Documents"
          options={options}
          onSelect={handleOptionSelect}
        />

        <Dropdown
          icon={red}
          label="Location"
          options={options}
          onSelect={handleOptionSelect}
        />

        <Dropdown
          icon={green}
          label="Marketing"
          options={options}
          onSelect={handleOptionSelect}
        />
        <Dropdown
          icon={yellow}
          label="Demographics"
          options={options}
          onSelect={handleOptionSelect}
        />
        <TestingFirebase />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderRadius: 3,
    backgroundColor: "E9E4E4",
    display: "flex",
    alignSelf: "center",
    flex: 1,
  },
  selectedOptionContainer: {
    marginTop: 20,
  },
});

export default ToDo;
