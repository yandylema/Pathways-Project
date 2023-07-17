import { Text, Button, View } from "react-native";


export default function SignUp({ navigation }) {
    return <View>
    <Text>sign up  page</Text>
    <Button
      title="submit"
      onPress={() => navigation.navigate("Details")}
    />
  </View>
}