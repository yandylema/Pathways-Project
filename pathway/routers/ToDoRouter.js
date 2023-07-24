import ToDo from "../pages/todo/ToDo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";

const Stack = createNativeStackNavigator();


export default function ToDoRouter() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ToDo" component={ToDo} options={({navigation}) => ({
              headerTitle: "Pathway",
              headerLeft: null,
              headerRight: () => <SettingsButton navigation={navigation} />
            })}/>
      </Stack.Navigator>
    );
  }
  