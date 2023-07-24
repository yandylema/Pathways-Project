import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";
import Settings from "../pages/settings/Settings";
import BackButton from "../components/BackButton";

const Stack = createNativeStackNavigator();

export default function SettingsRouter() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Settings" component={Settings} options={({navigation}) => ({
                headerTitle: "Pathway",
                headerLeft: () => <BackButton navigation={navigation} />,
                headerRight: () => <SettingsButton navigation={navigation} />
              })}/>
        </Stack.Navigator>
      );
}