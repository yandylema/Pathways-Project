import { Text, Button, View } from "react-native";


export default function Generate({ navigation }) {
    return <View>
    <Text>generate page</Text>
    <Button
      title="Generate Social Media"
      onPress={() => navigation.navigate("SocialMedia")}
    />
    <Button
      title="Generate Logo"
      onPress={() => navigation.navigate("Logo")}
    />
  </View>
}