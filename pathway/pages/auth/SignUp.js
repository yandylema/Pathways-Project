import { Text, Button, View, TextInput } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PageTitle from "../../components/PageTitle";
import PurpleButton from "../../components/PurpleButton";
import InputField from "../../components/InputField";
import { useState } from "react";



export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <InputField onChange={(text)=>{setEmail(text)}} value={email} placeholder="Email address"></InputField>
      <InputField onChange={(text)=>{setPassword(text)}} value={password} placeholder="Password"></InputField>
      <PurpleButton onPress={() => {
        navigation.navigate("Details", {email: email, password: password});
        }} text="Sign up" /> 
      </View>
    </View>
  );
}
