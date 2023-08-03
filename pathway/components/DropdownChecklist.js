import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const Dropdown = ({ label, icon, options, onSelect, optionStyle }) => {
  const [visible, setVisible] = useState(false);
  const optionsRef = useRef(null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleOptionPress = (option) => {
    onSelect(option);
    setVisible(false);
  };

  useEffect(() => {
    if (visible && optionsRef.current) {
      optionsRef.current.measure((x, y, width, height) => {
        const windowHeight = Dimensions.get("window").height;
        if (y + height > windowHeight) {
          optionsRef.current.setNativeProps({
            style: { top: windowHeight - (y + height + 10) },
          });
        }
      });
    }
  }, [visible]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={toggleDropdown}>
        <Text style={[styles.buttonText]}>{label}</Text>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>

      {visible && (
        <View style={[styles.optionsContainer]} ref={optionsRef}>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress(item)}
              >
                <Text style={optionStyle}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    marginBottom: 50,
    display: "flex",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
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
    fontSize: 20,
    alignSelf: "flex-start",
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
    position: "relative",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    maxHeight: 200,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Dropdown;
