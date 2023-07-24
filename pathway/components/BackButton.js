import { Text, Button, View } from "react-native";


export default function BackButton(props) {
    return <Button onPress={() => props.navigation.navigate("Main")} title="back"></Button>
}