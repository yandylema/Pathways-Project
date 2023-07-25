import { Text, Button, View } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PageTitle from "../../components/PageTitle";
import PurpleButton from "../../components/PurpleButton";
import InputField from "../../components/InputField";

export default function SignUp({ navigation }) {
  return (
    <View style={{
      flex: 1,
        // justifyContent: "space-around",
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center"
    }}>
      <AppTitle />
      <View style={{paddingTop: 100}}>
      <PageTitle>Create Account</PageTitle>
      <InputField placeholder="Email address"></InputField>
      <InputField placeholder="Password"></InputField>
      <PurpleButton onPress={() => navigation.navigate("Details")} text="Sign up" /> 
      </View>
    </View>
  );
}
