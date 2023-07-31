import MapView from "react-native-web-maps";
import { TouchableOpacity, View } from "react-native";
const mark = require("../../assets/ai.png");

const businessIcon = {
  path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
  fillColor: "red",
  fillOpacity: 0.9,
  scale: 2,
  strokeColor: "gold",
  strokeWeight: 2,
};

const realestateIcon = {
  path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
  fillColor: "green",
  fillOpacity: 0.9,
  scale: 2,
  strokeColor: "gold",
  strokeWeight: 2,
};

export default function MapLogic(props) {

  return (
    <>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={props.mapRegion}
      >
        {props.markers.map((marker) => {console.log(marker.lat);return (
          <MapView.Marker
            icon={businessIcon}
            onPress={() => console.log("sokork")}
            title={"Loltest"}
            description={"Deez"}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
          ></MapView.Marker>
        )})}
      </MapView>
    </>
  );
}
