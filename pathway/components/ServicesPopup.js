import { View, StyleSheet, Text, Image, Linking, TouchableOpacity } from "react-native";
import PageTitle from "./PageTitle";
import WhiteButton from "./WhiteButton";

const YelpIcon = require("../assets/YelpAppIcon.png");
const UberIcon = require("../assets/Uber-Eats-Icon-200x200.png");
const SquareIcon = require("../assets/SquareAppIcon.png");

export function ServicesPopup(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.card}>
        <PageTitle>Expand your business</PageTitle>

        <View style={{ }}>
          <WhiteButton
            text={
              <>
                <Image source={UberIcon} style={styles.images} />
                <Text>Learn More</Text>
              </>
            }
          />
        </View>
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
        <View style={{ flexDirection: "row" }}>
          <WhiteButton
            text={
              <>
                <Image source={SquareIcon} style={styles.images} />
                <Text>Learn More</Text>
              </>
            }
          />
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
    margin: 1 
  },
});
