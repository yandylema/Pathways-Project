import { Image, View, Text, StyleSheet } from "react-native"


export function LocationNav() {
    return (
        <View style={styles.locationNav}>
            <View>
                <Image />
                <Text>Businesses</Text>
            </View>
            <View>
                <Image />
                <Text>Services</Text>
            </View>
            <View>
                <Image />
                <Text>Real Estate</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    locationNav: {
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 100,
        boxShadow: "0px 0px 5px 0px gray",
        flexDirection: "row",
    }
});