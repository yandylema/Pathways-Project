import { Image, View, Text, StyleSheet } from "react-native";
const pathwaywhite = require("../assets/pathwaywhite.png");
const pathway = require("../assets/pathway.png");


const styles = StyleSheet.create({
    AppTitle: {
        width: 350,
        height: 200
    }
})

export function AppTitle(props) {
    console.log(props)
    return (
        <View style={{ alignItems: "center"}}>
            <Image source={props.color == "white" ? pathwaywhite : pathway} style={styles.AppTitle}/>
        </View>
    );
}