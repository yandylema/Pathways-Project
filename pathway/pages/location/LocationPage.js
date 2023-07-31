import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { LocationNav } from "../../components/LocationNav";
import mapscreenshot from "../../assets/mapscreenshot.png";
import { useState, useEffect } from "react";
import { ServicesPopup } from "../../components/ServicesPopup";
import { BusinessPopup } from "../../components/BusinessPopup";
import { RealEstatePopup } from "../../components/RealEstatePopup";
import { BusinessPin } from "../../components/BusinessPin";
import { RealEstatePin } from "../../components/RealEstatePin";
import MapLogic from "./MapLogic";
import * as Location from 'expo-location';


export default function LocationPage({ navigation }) {
  const [activePage, setActivePage] = useState("businesses");
  const [showBusinessPopup, setShowBusinessPopup] = useState(false);
  const [showRealEstatePopup, setShowRealEstatePopup] = useState(false);
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, setMarkers] = useState([]);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status)
      if (status !== 'granted' && status !== 'undetermined') {return;}
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setmapRegion({latitude: location.coords.latitude, longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,});

      getMarkers(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  async function getMarkers(lat, long) {
    const response = await fetch(`http://172.174.85.112:8080/businesses?type=coffee&location=${lat},${long}`);
    const responseJson = await response.json();
    setMarkers(responseJson);
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
    <MapLogic mapRegion={mapRegion} markers={markers}></MapLogic>
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
