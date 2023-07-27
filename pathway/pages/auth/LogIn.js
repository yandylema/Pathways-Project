import { Text, Button, View } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PageTitle from "../../components/PageTitle";
import PurpleButton from "../../components/PurpleButton";
import InputField from "../../components/InputField";
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';
import { useState } from "react";

const auth = getAuth();

export default function LogIn({ navigation }) {
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
        <PageTitle>Log in</PageTitle>
        <InputField onChange={(text)=>{setEmail(text)}} value={email} placeholder="Email address"></InputField>
      <InputField onChange={(text)=>{setPassword(text)}} value={password} placeholder="Password"></InputField>
        <PurpleButton onPress={async () => {
          await signInWithEmailAndPassword(auth, email, password);
      }} text="Log in" /> 
        </View>
      </View>
  );
}
