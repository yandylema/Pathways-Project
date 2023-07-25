import { Text, Button, View } from "react-native";
import InputField from "../../components/InputField";
import GrayCaption from "../../components/GrayCaption";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import PageTitle from "../../components/PageTitle";
import CheckList from "../../components/CheckList";

export default function Details({ navigation }) {
  return (
    <View style={{
      flex: 1,
        // justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center"
    }}>
      <AppTitle></AppTitle>
      <PageTitle>Business Details</PageTitle>
      <GrayCaption>
        This will help us personalize
      </GrayCaption>
      <GrayCaption>our services towards your business.</GrayCaption>
      <InputField placeholder={"Business name"}></InputField>
      <InputField placeholder={"Business product"}></InputField>
      <InputField placeholder={"Location: City, State, Zip"}></InputField>
      <InputField placeholder={"Business Type"}></InputField>
      <CheckList></CheckList>
      <PurpleButton text="Confirm" onPress={() => navigation.navigate("Main")}></PurpleButton>
    </View>
  );
}
