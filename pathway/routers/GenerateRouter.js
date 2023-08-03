import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import GeneratedSocScreen from '../pages/generate/GeneratedSocScreen'; // <- Import this
import SettingsButton from "../components/SettingsButton";
import HeaderBar from "../components/HeaderBar";

const Stack = createNativeStackNavigator();

export default function GenerateRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Generate" component={Generate} options={({navigation}) => ({
            headerTitle: () => <HeaderBar />,
            headerLeft: null,
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
      <Stack.Screen name="SocialMedia" component={SocialMedia} options={({navigation}) => ({
            headerTitle: () => <HeaderBar />,
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
      <Stack.Screen name="GeneratedSoc" component={GeneratedSocScreen} options={({navigation}) => ({  // <- Add this
            headerTitle: () => <HeaderBar />,
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
      <Stack.Screen name="Logo" component={Logo} options={({navigation}) => ({
            headerTitle: () => <HeaderBar />,
            headerRight: () => <SettingsButton navigation={navigation} />
          })}/>
    </Stack.Navigator>
  );
}
