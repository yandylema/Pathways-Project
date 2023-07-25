import Legal from "../pages/legal/Legal"
import ToDo from "../pages/todo/ToDo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";
import Location from "../pages/location/Location";
import HeaderBar from "../components/HeaderBar";
const Stack = createNativeStackNavigator();


export default function LocationRouter() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Location" component={Location} options={({navigation}) => ({
                headerTitle: () => <HeaderBar />,
                headerLeft: null,
                headerRight: () => <SettingsButton navigation={navigation} />
              })}/>
        </Stack.Navigator>
    );
}