import { View } from "react-native";
import InputField from "../../components/InputField";
import GrayCaption from "../../components/GrayCaption";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import PageTitle from "../../components/PageTitle";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Update the import statement

export default function Details({ navigation, route }) {
  const email = route.params.email;
  const password = route.params.password;

  const auth = getAuth();

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <AppTitle></AppTitle>
      <PageTitle>Business Details</PageTitle>
      <GrayCaption>This will help us personalize</GrayCaption>
      <GrayCaption>our services towards your business.</GrayCaption>
      <InputField placeholder={"Business name"}></InputField>
      <InputField placeholder={"Business product"}></InputField>
      <InputField placeholder={"Location: City, State, Zip"}></InputField>
      <InputField placeholder={"Starting Date: Month, Day, Year"}></InputField>
      <PurpleButton
        text="Confirm"
        onPress={async () =>
          await createUserWithEmailAndPassword(auth, email, password)
        }
      ></PurpleButton>
    </View>
  );
}
