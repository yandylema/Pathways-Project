import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";

const Stack = createNativeStackNavigator();

export default function GenerateRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Generate" component={Generate}  options={{ headerShown: false }}/>
      <Stack.Screen name="SocialMedia" component={SocialMedia} />
      <Stack.Screen name="Logo" component={Logo} />
    </Stack.Navigator>
  );
}
