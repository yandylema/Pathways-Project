import { Text, Button, View, StyleSheet } from "react-native";
import { LocationNav } from "../../components/LocationNav";


export default function Location({ navigation }) {
    return (<View style={styles.locationPage}>
        <LocationNav></LocationNav>
    </View>);
}

const styles = StyleSheet.create({
    locationPage: {
        padding: 10,
        alignItems: "center"
    }
});