import { Text, Button, View } from "react-native";


export default function SettingsButton(props) {
    return <Button onPress={() => props.navigation.navigate("SettingsRouter")} title="settings"></Button>
}