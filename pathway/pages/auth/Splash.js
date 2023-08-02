import { Text, Button, View, StyleSheet, Image } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import WhiteButton from "../../components/WhiteButton";
import { LinearGradient } from "expo-linear-gradient";
import FloatingImage from "../../components/FloatingImage";

const styles = StyleSheet.create({
  caption: {
    textAlign: "center",
    color: "white",
    fontFamily: "Jost",
    fontSize: 20,
    fontWeight: 300,
  },
});

export default function Splash({ navigation }) {
  return (
    <LinearGradient
      colors={["#68008D", "#3D00A0"]}
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <AppTitle color="white" />

      <View style={{ paddingBottom: 110 }}>
        
        <FloatingImage />
        <Text style={styles.caption}>Create your business.</Text>
        <Text style={styles.caption}>It's only a few clicks.</Text>
      </View>

      <View style={{ 
        width: "100%",
         alignItems: "center" 
        }}>
        <PurpleButton
          text="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
        <WhiteButton
          text="Sign In"
          onPress={() => navigation.navigate("LogIn")}
        />
      </View>
    </LinearGradient>
  );
}
