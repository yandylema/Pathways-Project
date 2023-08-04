import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from "react-native";
import WhiteButton from "./WhiteButton";
import PurpleButton from "./PurpleButton";
const building = require("../assets/building.png");
export function RealEstatePopup(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
        flex: 1,
        width: "100%",
        zIndex: 999,
        position: "absolute", 
        alignSelf: "stretch", 
        height: "100%"
      }}
      onPress={props.onPress}
    >
      <View
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            paddingLeft: 5,
            marginLeft: 14,
            fontWeight: "700",
          }}
        >
          {props.realestate.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            paddingLeft: 5,
            marginLeft: 14,
            fontWeight: "200",
          }}
        >
          {props.realestate.address}
        </Text>
        <View>
          <Image
            source={{uri : props.realestate.images[0]}}
            style={{
              height: 177,
              width: 352,
              marginBottom: 14,
              marginLeft: 14,
              marginTop: 10,
              borderRadius: 15
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ marginLeft: 14, marginRight: 143 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              {" "}
              Type
            </Text>
            <Text style={{ fontWeight: "light", textTransform: "capitalize" }}> {props.realestate.type}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              {" "}
              Year built
            </Text>
            <Text style={{ fontWeight: "light" }}> {props.realestate.year}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ marginLeft: 14, marginRight: 125 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              {" "}
              Availability
            </Text>
            <Text style={{ fontWeight: "light" }}> 1 Space</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              {" "}
              Property
            </Text>
            <Text style={{ fontWeight: "light" }}> {props.realestate.size}</Text>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={{width: "49%"}}>
        <WhiteButton text={"View Details"}></WhiteButton>
        </View>
        <View style={{width: "49%"}}>
        <PurpleButton onPress={()=>Linking.openURL(props.realestate.url)} text={"Contact Property"}></PurpleButton>
        </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
