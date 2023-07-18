import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LegalRouter from "./LegalRouter";
import ToDoRouter from "./ToDoRouter";
import LocationRouter from "./LocationRouter";
import GenerateRouter from "./GenerateRouter";


const Tab = createBottomTabNavigator();

export default function MainRouter() {
  return (
      <Tab.Navigator> 
        <Tab.Screen name="ToDoRouter" component={ToDoRouter} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="LegalRouter" component={LegalRouter} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="LocationRouter" component={LocationRouter} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name="GenerateRouter" component={GenerateRouter} options={{ headerShown: false }}></Tab.Screen>
      </Tab.Navigator>
  );
}
