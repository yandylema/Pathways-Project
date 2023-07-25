import { Text, Button, View, StyleSheet } from "react-native";
import { AppTitle } from "../../components/AppTitle";

const styles = StyleSheet.create({
  // secondary: {
  //   height: "70vh",
  //   justifyContent: "flex-end"
  // },
  // primary: {
  //   paddingTop: 100
  // }
});

export default function Splash({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 50,
        paddingTop: 100,
        backgroundColor: "#540095",
      }}
    >
      <AppTitle color="white" />

      <View>
        <Button title="sign up" onPress={() => navigation.navigate("SignUp")} />
        <Button title="log in" onPress={() => navigation.navigate("LogIn")} />
      </View>
    </View>
  );
}
