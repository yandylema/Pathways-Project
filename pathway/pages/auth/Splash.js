import { Text, Button, View, StyleSheet } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

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

      <PurpleButton
        text="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <WhiteButton
        text="Sign In"
        onPress={() => navigation.navigate("LogIn")}
      />
    </View>
  );
}
