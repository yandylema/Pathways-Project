import { View, StyleSheet, Text, Image } from "react-native";
import WhiteButton from "./WhiteButton";
import PurpleButton from "./PurpleButton";
const building = require("../assets/building.png");
export function RealEstatePopup(props) {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "130vh",
        width: "130vw",
        position: "fixed",
        top: 0,
        left: 0,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "50vh",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            paddingLeft: 5,
            fontWeight: "700",
          }}
        >
          Canyon Park - Building 2
        </Text>
        <Text
          style={{
            fontSize: 15,
            paddingLeft: 5,
            fontWeight: "200",
          }}
        >
          22922 Bothell Everett Hwy, Lake Pleasant, Bothell
        </Text>
        <View>
          <Image
            source={building}
            style={{ height: 177, width: 352, marginBottom: 40 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: 210 }}>
            <Text style={{ fontWeight: "bold" }}> Property</Text>
            <Text style={{ fontWeight: "light" }}> Retail</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> Year built</Text>
            <Text style={{ fontWeight: "light" }}> 2013</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: 168 }}>
            <Text style={{ fontWeight: "bold" }}> Availability</Text>
            <Text style={{ fontWeight: "light" }}> 1 Space/1448 SF</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> Property</Text>
            <Text style={{ fontWeight: "light" }}> $35/SF/Year</Text>
          </View>
        </View>
        <WhiteButton text={"View Details"}></WhiteButton>
        <PurpleButton text={"Contact Property"}></PurpleButton>
      </View>
    </View>
  );
}
