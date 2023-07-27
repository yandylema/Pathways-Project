import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import PageTitle from "./PageTitle";

const YelpIcon = require("../assets/YelpAppIcon.png");
const UberIcon = require("../assets/Uber-Eats-Icon-200x200.png");
const SquareIcon = require("../assets/SquareAppIcon.png");

export function ServicesPopup(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.card}>
        <PageTitle>Expand your business</PageTitle>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "93%",
            height: "20%",
            borderRadius: 13,
            padding: 10,
            marginLeft: 7,
            justifyContent: "space-around",
            boxShadow: "3px 3px rgba(1, 1, 1, 0.2)",
            alignItems: "center",
          }}
        >
          <Image source={UberIcon} style={styles.images} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 13 }}>
            Learn More
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "93%",
            borderRadius: 13,
            padding: 10,
            marginLeft: 7,
            height: "20%",
            justifyContent: "space-around",
            boxShadow: "3px 3px rgba(1, 1, 1, 0.2)",
            alignItems: "center",
          }}
        >
          <Image source={YelpIcon} style={styles.images} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 13 }}>
            Learn More
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            height: "20%",
            flexDirection: "row",
            width: "93%",
            borderRadius: 13,
            padding: 10,
            marginLeft: 7,
            justifyContent: "space-around",
            boxShadow: "3px 3px rgba(1, 1, 1, 0.2)",
            alignItems: "center",
          }}
        >
          <Image source={SquareIcon} style={styles.images} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 13 }}>
            Learn More
          </Text>
        </View>
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
  },
  card: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  images: {
    width: 50,
    height: 50,
    margin: 1,
  },
});
