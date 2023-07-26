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
            alignSelf: "left",
            fontSize: 30,
            padding: 10,
            paddingLeft: 15,
          }}
        >
          Pho Mama
        </Text>
        <Text style={{ alignSelf: "Left", paddingLeft: 15 }}>
          2.1
          <Image source={rating} style={{ width: 70, height: 20 }} />
          (87)
        </Text>
        <Text style={{ alignSelf: "Left", paddingLeft: 15 }}>
          Vietnamese Restaurant
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Image
              source={phoHorizontal2}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
            <Image
              source={phoHorizontal}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
          </View>

          <Image
            source={phoVertical}
            style={{ width: 125, height: 175, margin: 7, borderRadius: 20 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Image
              source={phoHorizontal3}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
            <Image
              source={phoHorizontal4}
              style={{ width: 120, height: 80, margin: 7, borderRadius: 20 }}
            />
          </View>
        </View>
        <Text
          style={{
            flexDirection: "row",
            alignSelf: "Left",
            paddingTop: 7,
            paddingLeft: 15,
          }}
        >
          <Image
            source={worldSmall}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          4141 University Way NE, Seattle, WA 13037
        </Text>
        <Text
          style={{
            flexDirection: "row",
            alignSelf: "Left",
            paddingTop: 7,
            paddingLeft: 15,
            textDecoration: "underline",
          }}
          onPress={() => {
            Linking.openURL("http://www.phomama.com/");
          }}
        >
          <Image
            source={locationSmall}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          https://www.phomama.com
        </Text>
        <Text
          style={{
            flexDirection: "row",
            alignSelf: "Left",
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
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "white",
    height: "50vh",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "Left",
  },
});
