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
import BackButton from "../components/BackButton";
import SettingsRouter from "./SettingsRouter";

const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Splash" component={Splash} options={({navigation}) => ({headerShown: false})}/>
        <Stack.Screen name="SignUp" component={SignUp} options={({navigation}) => ({headerShown: false})}/>
        <Stack.Screen name="LogIn" component={LogIn} options={({navigation}) => ({headerShown: false})}/>
        <Stack.Screen name="Details" component={Details} options={({navigation}) => ({headerShown: false})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
