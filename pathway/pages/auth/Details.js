import { Text, Button, View } from "react-native";
import { AppTitle } from "../../components/AppTitle";

export default function Details({ navigation }) {
  return (
    <View>
      <AppTitle></AppTitle>
      <Text>details page</Text>
      <Button title="submit" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
