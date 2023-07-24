import { Text, Button, View } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import { PurpleButton } from "../../components/purpleButton";
import { WhiteButton } from "../../components/WhiteButton";

export default function Splash({ navigation }) {
  return (
    <View>
      <Text>Splash page</Text>
      <AppTitle></AppTitle>
      <Button title="sign up" onPress={() => navigation.navigate("SignUp")} />
      <Button title="log in" onPress={() => navigation.navigate("LogIn")} />
    </View>
  );
}
