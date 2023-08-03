import { Text, Button, View, StyleSheet, ImageBackground, ActivityIndicator } from "react-native";
import { LocationNav } from "../../components/LocationNav";
import mapscreenshot from "../../assets/mapscreenshot.png";
import { useState, useEffect } from "react";
import { ServicesPopup } from "../../components/ServicesPopup";
import { BusinessPopup } from "../../components/BusinessPopup";
import { RealEstatePopup } from "../../components/RealEstatePopup";
import { BusinessPin } from "../../components/BusinessPin";
import { RealEstatePin } from "../../components/RealEstatePin";
import CONFIG from "../../config/config";
import MapLogic from "./MapLogic";
import * as Location from 'expo-location';

function LoadingPopup() {
  return(
    <View style={{height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.2)", zIndex: 998, position: "absolute", alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator size={"large"} color={"white"}></ActivityIndicator>
    </View>
  )
}


export default function LocationPage({ navigation }) {
  const [activePage, setActivePage] = useState("businesses");
  const [activeBusinessPopup, setActiveBusinessPopup] = useState(null);
  const [activeRealEstatePopup, setActiveRealEstatePopup] = useState(null);
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [businessMarkers, setBusinessMarkers] = useState([]);
  const [realEstateMarkers, setRealEstateMarkers] = useState([]);


  useEffect(() => {
    (async () => {
      let location = await getLocation();
      console.log(location)
      
      setmapRegion({latitude: location.coords.latitude, longitude: location.coords.longitude});
      console.log(businessMarkers.length)
      getBusinessMarkers(location.coords.latitude, location.coords.longitude);

      getRealEstateMarkers(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status)
      if (status == 'denied') {return;}
      let location = await Location.getCurrentPositionAsync({});
     return location;
  }

  async function getBusinessMarkers(lat, long) {
    const response = await fetch(`${CONFIG.SERVER_URL}/businesses?type=coffee&location=${lat},${long}`);
    const responseJson = await response.json();
    setBusinessMarkers(responseJson);
  }

  async function getRealEstateMarkers(lat, long) {
    const response = await fetch(`${CONFIG.SERVER_URL}/realestate?location=${lat},${long}`);
    const responseJson = await response.json();
    setRealEstateMarkers(responseJson);
  }

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
   
        {activeBusinessPopup && activePage == "businesses" ? <BusinessPopup business={activeBusinessPopup} onPress={()=>{
            setActiveBusinessPopup(null);
            setActiveRealEstatePopup(null);
            setActivePage("businesses");
        }}></BusinessPopup> : null}
        {businessMarkers.length == 0 && activePage == "businesses" ? <LoadingPopup></LoadingPopup> : null}

        {activePage == "services" ? <ServicesPopup onPress={()=>{
            setActivePage("businesses");
        }}></ServicesPopup> : null}

        {activeRealEstatePopup && activePage == "realestate" ? <RealEstatePopup realestate={activeRealEstatePopup} onPress={()=>{
            setActiveBusinessPopup(null);
            setActiveRealEstatePopup(null);
            setActivePage("realestate");
        }}></RealEstatePopup> : null}
         {realEstateMarkers.length == 0 && activePage == "realestate" ? <LoadingPopup></LoadingPopup> : null}

    <MapLogic mapRegion={mapRegion} businessMarkers={businessMarkers} realEstateMarkers={realEstateMarkers} setActiveRealEstatePopup={setActiveRealEstatePopup} setActiveBusinessPopup={setActiveBusinessPopup} activePage={activePage}></MapLogic>
    </View>
  );
}
