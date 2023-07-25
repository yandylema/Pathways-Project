import { Text, Button, View } from "react-native";
import InputField from "../../components/InputField";
import GrayCaption from "../../components/GrayCaption";
import { AppTitle } from "../../components/AppTitle";

export default function Details({ navigation }) {
  return (
    <View>
      <AppTitle></AppTitle>
      <Text>Business Details</Text>
      <GrayCaption>
        This will help us personalize our services towards your business.
      </GrayCaption>
      <InputField placeholder={"Business name"}></InputField>
      <InputField placeholder={"Business product"}></InputField>
      <InputField placeholder={"Location: City, State, Zip"}></InputField>
      <InputField placeholder={"Business Type"}></InputField>
      <Button title="Confirm" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
