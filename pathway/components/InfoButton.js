import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Pressable } from "react-native";

export default function InfoButton(props) {
  return (
    <View style={styles.container}>
      
        <Pressable onPress={props.onPress}>
          <Image
            style={styles.image}
            source={require("../assets/infoButton.png")}
          />
        </Pressable>
        <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  image: {
    width: 20,
    height: 20,
  },
});
