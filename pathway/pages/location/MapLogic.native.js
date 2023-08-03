import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import RealEstate from '../../assets/realestatepng.png';
import Shop from '../../assets/shoppng.png';


export default function MapLogic(props) {
  console.log(props.markers)
    return (<MapView
        style={{ alignSelf: 'stretch', height: '100%', zIndex: 0 }}
        region={{...props.mapRegion, latitudeDelta: 0.01844, longitudeDelta: 0.00842}}
      >
      {props.activePage == "businesses" ? props.businessMarkers.map((marker, idx) => {console.log(marker.lat);return (
          <Marker
            key={idx}
            onPress={()=>{props.setActiveBusinessPopup(marker); console.log("lol")}}
            // title={"Loltest"}
            // description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ><Image source={Shop} style={{width: 40, resizeMode: "contain"}}></Image></Marker>
        )}): null}

        {props.activePage == "realestate" ? props.realEstateMarkers.map((marker, idx) => {console.log(marker.lat);return (
          <Marker
            key={idx}
            onPress={()=>{props.setActiveRealEstatePopup(marker); console.log("lol")}}
            // title={"Loltest"}
            // description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ><Image source={RealEstate} style={{width: 40, resizeMode: "contain"}}></Image></Marker>
        )}): null}
      </MapView>);
}