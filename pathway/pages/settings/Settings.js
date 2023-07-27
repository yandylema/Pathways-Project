import { Text, Button, View } from "react-native";
import PageTitle from "../../components/PageTitle";
import SettingsButton from "../../components/SettingsButton";
import WhiteButton from "../../components/WhiteButton";
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();


export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <PageTitle>Settings</PageTitle>
      <WhiteButton text="Account"></WhiteButton>
      <WhiteButton text="Notifications"></WhiteButton>
      <WhiteButton text="Language"></WhiteButton>
      <WhiteButton text="Data"></WhiteButton>
      <WhiteButton onPress={()=>signOut(auth)} text="Logout"></WhiteButton>
    </View>
  );
}
