import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LegalRouter from "./LegalRouter";
import ToDoRouter from "./ToDoRouter";
import LocationRouter from "./LocationRouter";
import GenerateRouter from "./GenerateRouter";
import AIicon from "../assets/ai.png";
import { Image, Text, StyleSheet, View } from "react-native";
import { TabBarButton } from "../components/TabBarButton";
const ai = require("../assets/ai.png");
const aipurple = require("../assets/aipurple.png");
const legal = require("../assets/legal.png");
const legalpurple = require("../assets/legalpurple.png");
const todo = require("../assets/todo.png");
const todopurple = require("../assets/todopurple.png");
const location = require("../assets/location.png");
const locationpurple = require("../assets/locationpurple.png");
import SettingsRouter from "./SettingsRouter";
import Details from "../pages/auth/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function MainRouter() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarStyle: {height: 60, paddingTop:6},
      }}>
      <Tab.Screen
        name="ToDoRouter"
        component={ToDoRouter}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: ()=>null,
          tabBarIcon: ({ size, focused, color }) => (
            <View style={{
              alignItems: "center"
              }}>
            <Image
              style={{ width: size+4, height: size+5 }}
              source={focused ? todopurple : todo}
            />
            <Text style={{color: focused ? "purple" : "black", fontWeight:300, marginBottom: 5}}>To Do</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="LegalRouter"
        component={LegalRouter}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: ()=>null,
          tabBarIcon: ({ size, focused, color }) => (
            <View style={{
              alignItems: "center"}}>
            <Image
              style={{ width: size+4, height: size+4 }}
              source={focused ? legalpurple : legal}
            />
            <Text style={{color: focused ? "purple" : "black", fontWeight:300, marginBottom: 5}}>Legal</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="LocationRouter"
        component={LocationRouter}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: ()=>null,
          tabBarIcon: ({ size, focused, color }) => (
            <View style={{alignItems: "center"}}>
            <Image
              style={{ width: size-4, height: size+5 }}
              source={focused ? locationpurple : location}
            />
            <Text style={{color: focused ? "purple" : "black", fontWeight:300, marginBottom: 5}}>Location</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="GenerateRouter"
        component={GenerateRouter}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: ()=>null,
          tabBarIcon: ({ size, focused, color }) => (
            <View style={{alignItems: "center"}}>
              <Image
                style={{ width: size+5, height: size+5 }}
                source={focused ? aipurple : ai}
              />
              <Text style={{color: focused ? "purple" : "black", fontWeight:300, marginBottom: 5}}>Generate</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Stack.Screen
        name="SettingsRouter"
        component={SettingsRouter}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false
        })}
      />
    </Tab.Navigator>
    
      
    </NavigationContainer>
  );
}
