import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Dropdown = ({ label, icon, options, onSelect, optionStyle }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleOptionPress = (option) => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={toggleDropdown}>
        <Text style={[styles.buttonText]}>{label}</Text>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>

      {visible && (
        <View style={[styles.optionsContainer]}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={optionStyle}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    marginBottom: 75,
    display: "flex",
  },
  button: {
    backgroundColor: "white",
    width: "95%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#747474",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    position: "absolute",
    fontSize: 18,
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontFamily: "Jost",
    paddingLeft: 10,
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    width: 35,
    height: 35,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  optionsContainer: {
    position: "absolute",
    width: "95%",
    marginTop: 30,
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Dropdown;
