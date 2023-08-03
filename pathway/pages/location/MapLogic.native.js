import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import React, { useState } from 'react';
import { View } from 'react-native';

function businessMarker() {
  return (<View style={{width: 10, height: 10, backgroundColor: "red"}}></View>);
}

export default function MapLogic(props) {
  console.log(props.markers)
    return (<MapView
        style={{ alignSelf: 'stretch', height: '100%', zIndex: 0 }}
        region={{...props.mapRegion, latitudeDelta: 0.01844, longitudeDelta: 0.00842}}
      >
      {props.activePage == "businesses" ? props.businessMarkers.map((marker, idx) => {console.log(marker.lat);return (
          <Marker
            key={idx}
            icon={businessMarker}
            onPress={()=>{props.setActiveBusinessPopup(marker); console.log("lol")}}
            // title={"Loltest"}
            // description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ></Marker>
        )}): null}

        {props.activePage == "realestate" ? props.realEstateMarkers.map((marker, idx) => {console.log(marker.lat);return (
          <Marker
            key={idx}
            icon={businessMarker}
            onPress={()=>{props.setActiveRealEstatePopup(marker); console.log("lol")}}
            // title={"Loltest"}
            // description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ></Marker>
        )}): null}
      </MapView>);
}