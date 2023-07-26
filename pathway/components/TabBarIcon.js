import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";


export function TabBarIcon(props) {
    return (
      <TouchableOpacity>
      <Image
        style={{ width: props.size+5, height: props.size+5 }}
        source={props.focused ? props.focusedimage : props.image}
      />
      <Text style={{color: props.focused ? "purple" : "black", fontWeight:300}}>Generate</Text>
      </TouchableOpacity>
    );    
  
  }