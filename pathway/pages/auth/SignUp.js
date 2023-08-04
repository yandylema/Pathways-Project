import { Text, Button, View, TextInput } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PageTitle from "../../components/PageTitle";
import PurpleButton from "../../components/PurpleButton";
import InputField from "../../components/InputField";
import { useState } from "react";

function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search (filter) != -1;
}

function validPass(e) {
  return e.length > 5;
}

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <View style={{
      flex: 1,
        // justifyContent: "space-around",
        paddingBottom: 10,
        paddingTop: 30,
        // alignItems: "center",
        maxWidth: 500,
        width: "100%",
        alignSelf: "center"

    }}>
      <AppTitle />
      <View style={{paddingTop: 100}}>
      <PageTitle>Create Account</PageTitle>
      <InputField onChange={(text)=>{setEmail(text)}} value={email} placeholder="Email address"></InputField>
      <InputField secure={true} onChange={(text)=>{setPassword(text)}} value={password} placeholder="Password"></InputField>
      <PurpleButton onPress={() => {
        if (!validEmail(email)) {
          setError("Invalid email.")
          return;
        }
        if (!validPass(password)) {
          setError("Invalid password: must be 6 characters or more")
          return;
        }
        navigation.navigate("Details", {email: email, password: password});
        }} text="Sign up" /> 
        {error ? 
        <Text style={{color: "darkred", backgroundColor: "rgba(200, 150, 150 ,0.4)", marginTop: 20, borderRadius: 15, fontFamily: "Jost", padding: 10, border: "2px solid darkred"}}>{error}</Text>
        : null}
        </View>
    </View>
  );
}
