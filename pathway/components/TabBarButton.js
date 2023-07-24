import { Image, Text, TouchableOpacity } from "react-native";


export function TabBarButton(props) {
    return (
        <TouchableOpacity>
            <Image source={props.image}></Image>
            <Text>{props.children}</Text>
        </TouchableOpacity>
    );
}