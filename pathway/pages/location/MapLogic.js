import MapView from "react-native-web-maps";
import React, { useState } from 'react';
import shopsvg from "../../assets/shopsvg.svg";
import realestatesvg from "../../assets/realestatesvg.svg"

import { TouchableOpacity, View } from "react-native";
const mark = require("../../assets/ai.png");


export default function MapLogic(props) {
  console.log(shopsvg)
  return (
    <>
      <MapView
        style={{ alignSelf: "stretch", height: "100%", zIndex: 0 }}
        region={{...props.mapRegion, latitudeDelta: 0.01844, longitudeDelta: 0.00842}}
      >
        
        {props.activePage == "businesses" ? props.businessMarkers.map((marker, idx) => {console.log(marker.lat);return (
          <MapView.Marker
            key={idx}
            icon={shopsvg}
            onPress={()=>{props.setActiveBusinessPopup(marker); console.log("lol")}}
            // title={"Loltest"}
            // description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ></MapView.Marker>
        )}): null}

        {props.activePage == "realestate" ? props.realEstateMarkers.map((marker, idx) => {console.log(marker.lat);return (
          <MapView.Marker
            key={idx}
            icon={realestatesvg}
            onPress={()=>{props.setActiveRealEstatePopup(marker); console.log("lol")}}
            // title={"Loltest"}
            // description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ></MapView.Marker>
        )}): null}
      </MapView>
    </>
  );
}
