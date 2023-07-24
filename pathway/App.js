import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AuthRouter from "./routers/AuthRouter";
import {RecoilRoot} from "recoil";

export default function App() {
  return (
    <RecoilRoot>
    <AuthRouter></AuthRouter>
    </RecoilRoot>
  );
}
