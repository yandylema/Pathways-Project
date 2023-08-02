import { View, StyleSheet, Text, Image, Linking, TouchableOpacity } from "react-native";

const rating = require("../assets/rating.png");
const phoHorizontal = require("../assets/phoHorizontal.png");
const phoHorizontal2 = require("../assets/phoHorizontal2.png");
const phoHorizontal3 = require("../assets/phoHorizontal3.png");
const phoHorizontal4 = require("../assets/phoHorizontal4.png");
const phoVertical = require("../assets/phoVertical.png");
const locationSmall = require("../assets/locationSmall.png");
const worldSmall = require("../assets/worldSmall.png");

export function BusinessPopup(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.card}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            padding: 10,
            paddingLeft: 15,
          }}
        >
          {props.business.name}
        </Text>
        <Text style={{ paddingLeft: 15 }}>
          2.1
          <Image source={rating} style={{ width: 70, height: 20 }} />
          (87)
        </Text>
        <Text style={{  paddingLeft: 15 }}>
          {props.business.type}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Image
              source={{uri: props.business.images[0]}}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
            <Image
              source={{uri: props.business.images[1]}}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
          </View>

          <Image
            source={{uri: props.business.images[2]}}
            style={{ width: 125, height: 175, margin: 7, borderRadius: 20 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Image
              source={{uri: props.business.images[3]}}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
            <Image
              source={{uri: props.business.images[4]}}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
          </View>
        </View>
        <Text
          style={{
            flexDirection: "row",
            paddingTop: 7,
            paddingLeft: 15,
          }}
        >
          <Image
            source={worldSmall}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          {props.business.address}
        </Text>
        <Text
          style={{
            flexDirection: "row",
            paddingTop: 7,
            paddingLeft: 15,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            Linking.openURL("http://www.phomama.com/");
          }}
        >
          <Image
            source={locationSmall}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          {props.business.websiteURL}
        </Text>
        <Text
          style={{
            flexDirection: "row",
            paddingTop: 7,
            paddingLeft: 15,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    zIndex: 999,
    position: "absolute", 
    alignSelf: "stretch", height: "100%"
  },
  card: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
