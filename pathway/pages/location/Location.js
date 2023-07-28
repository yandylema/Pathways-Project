import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { LocationNav } from "../../components/LocationNav";
import mapscreenshot from "../../assets/mapscreenshot.png";
import { useState } from "react";
import { ServicesPopup } from "../../components/ServicesPopup";
import { BusinessPopup } from "../../components/BusinessPopup";
import { RealEstatePopup } from "../../components/RealEstatePopup";
import { BusinessPin } from "../../components/BusinessPin";
import { RealEstatePin } from "../../components/RealEstatePin";
import MapLogic from "./MapLogic";


export default function Location({ navigation }) {
  const [activePage, setActivePage] = useState("businesses");
  const [showBusinessPopup, setShowBusinessPopup] = useState(false);
  const [showRealEstatePopup, setShowRealEstatePopup] = useState(false);

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        width: "100%",
        justifyContent: "center",
      }}
    >
        <LocationNav
          activePage={activePage}
          setActivePage={setActivePage}
        ></LocationNav>
    <MapLogic></MapLogic>
        {activePage == "businesses" ? <BusinessPin onPress={()=>setShowBusinessPopup(true)}></BusinessPin> : null}
        {showBusinessPopup && activePage == "businesses" ? <BusinessPopup onPress={()=>{
            setShowBusinessPopup(false);
            setShowRealEstatePopup(false);
            setActivePage("businesses");
        }}></BusinessPopup> : null}

        {activePage == "services" ? <ServicesPopup></ServicesPopup> : null}

        {activePage == "realestate" ? <RealEstatePin onPress={()=>setShowRealEstatePopup(true)}></RealEstatePin> : null}
        {showRealEstatePopup && activePage == "realestate" ? <RealEstatePopup onPress={()=>{
            setShowBusinessPopup(false);
            setShowRealEstatePopup(false);
            setActivePage("realestate");
        }}></RealEstatePopup> : null}
    </View>
  );
}
