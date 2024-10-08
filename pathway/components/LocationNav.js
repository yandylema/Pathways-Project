import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import businesses from "../assets/businesses.png"
import businessespurple from "../assets/businessespurple.png"
import realestate from "../assets/realestate.png"
import realestatepurple from "../assets/realestatepurple.png"
import services from "../assets/services.png"
import servicespurple from "../assets/servicespurple.png"




export function LocationNav(props) {
    return (
        <View style={styles.locationNav}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.setActivePage("businesses")}>
                <Image source={props.activePage == "businesses" ? businessespurple : businesses} style={{width: 35, height: 35}}/>
                <Text style={{color: props.activePage == "businesses" ? "purple": "black"}}>Businesses</Text>
            </TouchableOpacity>
            <View style={{height: 50, backgroundColor: "black", width: 1}}></View>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.setActivePage("services")}>
                <Image source={props.activePage == "services" ? servicespurple : services} style={{width: 35, height: 35}} />
                <Text style={{color: props.activePage == "services" ? "purple": "black"}}>Services</Text>
            </TouchableOpacity>
            <View style={{height: 50, backgroundColor: "black", width: 1}}></View>

            <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.setActivePage("realestate")}>
                <Image source={props.activePage == "realestate" ? realestatepurple : realestate} style={{width: 35, height: 35}} />
                <Text style={{color: props.activePage == "realestate" ? "purple": "black"}}>Real Estate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    locationNav: {
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        maxWidth: 500,
        paddingBottom: 14,
        backgroundColor: "white",
        borderRadius: 25,
        height: 70,
        shadowColor: "#747474",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        flexDirection: "row",
        padding: 20,
        zIndex: 999,
        position: "absolute",
        top: 20,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});