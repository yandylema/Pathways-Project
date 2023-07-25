import { Text, Button, View, StyleSheet, ImageBackground } from "react-native";
import { LocationNav } from "../../components/LocationNav";
import mapscreenshot from "../../assets/mapscreenshot.png";

export default function Location({ navigation }) {
  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
        flex: 1,
        width: "100%",
      }}
    >
      <ImageBackground
        source={mapscreenshot}
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center"
        }}
      >
        <LocationNav></LocationNav>
      </ImageBackground>
    </View>
  );
}
