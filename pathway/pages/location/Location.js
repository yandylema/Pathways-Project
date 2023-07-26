import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { LocationNav } from "../../components/LocationNav";
import mapscreenshot from "../../assets/mapscreenshot.png";
import { useState } from "react";
import { ServicesPopup } from "../../components/ServicesPopup";
import { BusinessPopup } from "../../components/BusinessPopup";
// import { RealEstatePopup } from "../../components/RealEstatePopup";

export default function Location({ navigation }) {
  const [activePage, setActivePage] = useState("businesses");

  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
        flex: 1,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={mapscreenshot}
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <LocationNav
          activePage={activePage}
          setActivePage={setActivePage}
        ></LocationNav>

        {activePage == "services" ? <BusinessPopup></BusinessPopup> : null}

        {activePage == "services" ? <BusinessPopup></BusinessPopup> : null}
      </ImageBackground>
    </View>
  );
}
