import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";


const Stack = createNativeStackNavigator();

export default function GenerateRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Generate" component={Generate} options={({navigation}) => ({
            headerTitle: "Pathway",
            headerLeft: null,
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
      <Stack.Screen name="SocialMedia" component={SocialMedia} options={({navigation}) => ({
            headerTitle: "Pathway",
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
      <Stack.Screen name="Logo" component={Logo} options={({navigation}) => ({
            headerTitle: "Pathway",
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
    </Stack.Navigator>
  );
}
