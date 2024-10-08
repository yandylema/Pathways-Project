import ToDo from "../pages/todo/ToDo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Generate from "../pages/generate/Generate";
import Logo from "../pages/generate/Logo";
import SocialMedia from "../pages/generate/SocialMedia";
import SettingsButton from "../components/SettingsButton";
import HeaderBar from "../components/HeaderBar";
import Header from "./Header";

const Stack = createNativeStackNavigator();


export default function ToDoRouter() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ToDo" component={ToDo} options={({navigation}) => ({
              header: () => <Header navigation={navigation} showBackButton={false}></Header>
            })}/>
      </Stack.Navigator>
    );
  }
  
