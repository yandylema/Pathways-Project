import { View } from "react-native"
import BackButton from "../components/BackButton"
import HeaderBar from "../components/HeaderBar"
import SettingsButton from "../components/SettingsButton"

export default function Header(props) {
    return (
        <View style={{backgroundColor: "white", flexDirection: "column", borderBottomWidth: 1, borderBottomColor: "#dddddd"}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", paddingTop: 6, paddingLeft: 10, paddingRight: 10}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
            {props.showBackButton ? <BackButton navigation={props.navigation} ></BackButton> : null}
            <HeaderBar></HeaderBar>
            </View>
            <SettingsButton navigation={props.navigation} />
            </View>
        </View>
    )
}