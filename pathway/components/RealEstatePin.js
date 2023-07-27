import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
export function RealEstatePin(props) {
    return (
        <TouchableOpacity
          style={{
            borderRadius: 1000,
            backgroundColor: "white",
            width: 22,
            height: 22,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#747474",
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
            position: "absolute",
            top: 300,
            left: 300
          }}
          onPress={props.onPress}
        >
          <View
            style={{
              borderRadius: 1000,
              backgroundColor: "green",
              width: 16,
              height: 16,
            }}
          ></View>
        </TouchableOpacity>
      );
    }
    