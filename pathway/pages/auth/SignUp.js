import { Text, Button, View } from "react-native";
import { AppTitle } from "../../components/AppTitle";

export default function SignUp({ navigation }) {
  return (
    <View>
      <AppTitle />
      <Text>sign up page</Text>
      <Button title="submit" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}
