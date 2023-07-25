import { Text, Button, View } from "react-native";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

export default function Splash({ navigation }) {
  return (
    <View>
      <PageTitle>Title</PageTitle>
      <Text>Splash page</Text>
      <AppTitle></AppTitle>
      <PurpleButton
        text="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <WhiteButton
        text="Sign In"
        onPress={() => navigation.navigate("LogIn")}
      />
    </View>
  );
}
