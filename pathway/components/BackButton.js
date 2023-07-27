import { Text, Button, View, TouchableOpacity, Image } from "react-native";


export default function BackButton(props) {
    return <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image source={require("../assets/backarrow.png")} style={{width: 15, height: 15, marginLeft: 17, marginRight: 20}}></Image>
    </TouchableOpacity>
}