import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";
import HeaderBar from "../components/HeaderBar";
import Header from "./Header";


const Stack = createNativeStackNavigator();

export default function GenerateRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Generate" component={Generate} options={({navigation}) => ({
            header: () => <Header navigation={navigation} showBackButton={false}></Header>
          })}/>
      <Stack.Screen name="SocialMedia" component={SocialMedia} options={({navigation}) => ({
            header: () => <Header navigation={navigation} showBackButton={true}></Header>
          })}/>
      <Stack.Screen name="Logo" component={Logo} options={({navigation}) => ({
            header: () => <Header navigation={navigation} showBackButton={true}></Header>   
          })}/>
    </Stack.Navigator>
  );
}
