import pathway from "../assets/pathway.png"
import { Image, View, Text, StyleSheet } from "react-native";

export function AppTitle() {
    return (
        <View>
            <Image source={pathway} />
        </View>
    );
}