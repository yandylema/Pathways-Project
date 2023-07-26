import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import businesses from "../assets/businesses.png"
import realestate from "../assets/realestate.png"
import services from "../assets/services.png"



export function LocationNav(props) {
    return (
        <View style={styles.locationNav}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.setActivePage("businesses")}>
                <Image source={businesses} style={{width: 35, height: 35}}/>
                <Text style={{color: props.activePage == "businesses" ? "purple": "black"}}>Businesses</Text>
            </TouchableOpacity>
            <View style={{height: 50, backgroundColor: "black", width: 1}}></View>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.setActivePage("services")}>
                <Image source={services} style={{width: 35, height: 35}} />
                <Text style={{color: props.activePage == "services" ? "purple": "black"}}>Services</Text>
            </TouchableOpacity>
            <View style={{height: 50, backgroundColor: "black", width: 1}}></View>

            <TouchableOpacity style={styles.buttonContainer} onPress={()=>props.setActivePage("realestate")}>
                <Image source={realestate} style={{width: 35, height: 35}} />
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
        backgroundColor: "white",
        borderRadius: 25,
        height: 70,
        boxShadow: "0px 0px 5px 0px gray",
        flexDirection: "row",
        padding: 20,
        zIndex: 999,
        position: "absolute",
        top: 20,
        left: "50%",
        transform: "translate(-50%)"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});