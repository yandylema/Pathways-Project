import Legal from "../pages/legal/Legal"
import ToDo from "../pages/todo/ToDo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";
import LocationPage from "../pages/location/LocationPage";
import HeaderBar from "../components/HeaderBar";
const Stack = createNativeStackNavigator();


export default function LocationRouter() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Location" component={LocationPage} options={({navigation}) => ({
                headerTitle: () => <HeaderBar />,
                headerLeft: null,
                headerRight: () => <SettingsButton navigation={navigation} />
              })}/>
        </Stack.Navigator>
    );
}