import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import PageTitle from "../../components/PageTitle";
import Dropdown from "../../components/DropdownChecklist";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
const purple = require("../../assets/Ellipse5.png");
const red = require("../../assets/Ellipse6.png");
const green = require("../../assets/Ellipse7.png");
const yellow = require("../../assets/Ellipse8.png");

const ToDo = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const db = getDatabase();
  const auth = getAuth();
  // const userId = auth.currentUser.uid;
  let value = false;
  const returnValue = () => {
    return onValue(
      ref(db, "businesses/1/completed_forms/1"),
      (snapshot) => {
        value = snapshot.val();
      },
      {
        onlyOnce: true,
      }
    );
  };
  console.log(value);
  const legalDocumentsOptions = [
    "1. Submit Business License Tax form",
    "2. Obtain Food Service Permit",
    "3. Set up Employee Identification Number",
    "4. Obtain Alcohol License",
  ];
  const locationOptions = [
    "1. View Competitors",
    "2. View Real Estate Options",
    "3. Set Up Third Party Services",
  ];
  const marketingOptions = [
    "1. Create Social Media Post",
    "2. Generate Website",
    "3. Generate Business Logo",
  ];
  const additionalOptions = [
    "1. Personalize Language Settings",
    "2. Verify Account Details",
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    returnValue();
  };

  return (
    <ScrollView style={styles.container}>
      <PageTitle>To-Do List</PageTitle>
        <Dropdown
          icon={purple}
          label="Legal Documents"
          options={legalDocumentsOptions}
          onSelect={handleOptionSelect}
        />

        <Dropdown
          icon={red}
          label="Location"
          options={locationOptions}
          onSelect={handleOptionSelect}
        />

        <Dropdown
          icon={green}
          label="Marketing"
          options={marketingOptions}
          onSelect={handleOptionSelect}
        />
        <Dropdown
          icon={yellow}
          label="Other"
          options={additionalOptions}
          onSelect={handleOptionSelect}
        />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "95%",
    borderRadius: 3,
    backgroundColor: "E9E4E4",
    maxWidth: 500,
    display: "flex",
    flex: 1,
    alignSelf: "center",
  },
});

export default ToDo;
