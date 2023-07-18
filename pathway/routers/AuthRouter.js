import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Splash from "../pages/auth/Splash";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import Details from "../pages/auth/Details";
import MainRouter from "./MainRouter";
import Settings from "../pages/settings/Settings";
import SettingsButton from "../components/SettingsButton";

const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }}/>
        <Stack.Screen name="LogIn" component={LogIn}  options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details}  options={{ headerShown: false }} />
        <Stack.Screen
          name="Main"
          component={MainRouter}
          options={({navigation}) => ({
            headerTitle: "Pathway",
            headerLeft: () => null,
            headerRight: () => <SettingsButton goToSettings={()=>navigation.navigate("Settings")} />
          })}
        />
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
