import { StyleSheet, Text, Button, View } from "react-native";
import CheckList from "../../components/CheckList";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import Dropdown from "../../components/DropdownChecklist";


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
          label="Legal Documents"
          options={options}
          onSelect={handleOptionSelect}
        />

        <Dropdown
          label="Location"
          options={options}
          onSelect={handleOptionSelect}
        />

        <Dropdown
          label="Marketing"
          options={options}
          onSelect={handleOptionSelect}
        />
        <Dropdown
          label="Demographics"
          options={options}
          onSelect={handleOptionSelect}
        />
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
