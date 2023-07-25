import ToDo from "../pages/todo/ToDo";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Legal from "../pages/legal/Legal";

const Stack = createNativeStackNavigator();
export default function ToDoRouter() {
  return (
    <ToDo>
      <Stack.Navigator>
        <Stack.Screen
          name="LegalDocs"
          component={Legal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ToDo>
  );
}
