import { Text, Button, View } from "react-native";


export default function SettingsButton(props) {
    return <Button onPress={props.goToSettings} title="settings"></Button>
}