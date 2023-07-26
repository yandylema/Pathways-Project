import { View, StyleSheet, Text, Image, Linking } from "react-native";
import PageTitle from "./PageTitle";
import WhiteButton from "./WhiteButton";

const YelpIcon = require("../assets/YelpAppIcon.png");
const UberIcon = require("../assets/Uber-Eats-Icon-200x200.png");
const SquareIcon = require("../assets/SquareAppIcon.png");

export function ServicesPopup() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <PageTitle>Expand your business</PageTitle>

        <View style={{ flexDirection: "row" }}>
          <WhiteButton
            text={
              <>
                <Image source={YelpIcon} style={styles.images} />
                <Text>Learn More</Text>
              </>
            }
          />
        </View>
        <Image
          source={UberIcon}
          style={{ width: 110, height: 80, margin: 10 }}
        />
        <Image
          source={SquareIcon}
          style={{ width: 110, height: 80, margin: 10 }}
        />
      </View>
    </View>
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
  images: { width: 50, height: 50, margin: 10 },
});
