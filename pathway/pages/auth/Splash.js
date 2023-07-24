import { Text, Button, View } from "react-native";


export default function Splash({ navigation }) {
  return (
    <View>
      <Text>Splash page</Text>
      <Button title="sign up" onPress={() => navigation.navigate("SignUp")} />
      <Button title="log in" onPress={() => navigation.navigate("LogIn")} />\
    </View>
  );
}
