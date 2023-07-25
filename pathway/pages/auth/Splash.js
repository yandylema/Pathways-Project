import { Text, Button, View, StyleSheet, Image } from "react-native";
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
  caption: {
    textAlign: "center",
    color: "white",
    fontFamily: "Jost",
    fontSize: 20,
    fontWeight: 300
  },
});

export default function Splash({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 30,
        backgroundImage: "linear-gradient(#68008D, #3D00A0)",
        alignItems: "center",
      }}
    >
      <AppTitle color="white" />

      <View style={{ paddingBottom: 110 }}>
        <Image
          style={{ width: 230, height: 230 }}
          source={require("../../assets/splashimage.png")}
        />
        <Text style={styles.caption}>Create your business.</Text>
        <Text
          style={styles.caption}
        >
          It's only a few clicks.
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <PurpleButton
          text="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
        <WhiteButton
          text="Sign In"
          onPress={() => navigation.navigate("LogIn")}
        />
      </View>
    </View>
  );
}
