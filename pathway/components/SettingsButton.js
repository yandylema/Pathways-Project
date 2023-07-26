import { Image, TouchableOpacity, View } from "react-native";

const settingsbuttonImage = require("../assets/settingsbutton.png");

export default function SettingsButton(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("SettingsRouter")}
      >
        <Image
          source={settingsbuttonImage}
          style={{ width: 30, height: 30, margin: 10, resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </View>
  );
}
