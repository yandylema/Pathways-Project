import { Text, Button, View } from "react-native";

export default function Details({ navigation }) {
    return <View>
    <Text>details page</Text>
    <Button
      title="submit"
      onPress={() => navigation.navigate("Main")}
    />
  </View>
}