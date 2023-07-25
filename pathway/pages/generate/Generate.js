import { Text, Button, View } from "react-native";
import GradientCard from "../../components/GradientCard";

export default function Generate({ navigation }) {
  return (
    <View>
      <Text>generate page</Text>
      <Button
        title="Generate Social Media"
        onPress={() => navigation.navigate("SocialMedia")}
      />
      <Button
        title="Generate Logo"
        onPress={() => navigation.navigate("Logo")}
      />
      <GradientCard> </GradientCard>
    </View>
  );
}
