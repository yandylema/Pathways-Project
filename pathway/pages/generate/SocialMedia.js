import { Text, Button, View, Image } from "react-native";
import PageTitle from "../../components/PageTitle";

const upload = require("../../assets/upload.png");
export default function SocialMedia({ navigation }) {
  return (
    <View>
      <PageTitle>Social Media Marketing</PageTitle>
      <Text
        style={{
          alignSelf: "center",
          fontFamily: "Jost",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Insert Image
      </Text>
      <Image
        source={upload}
        style={{ width: 400, height: 400, alignSelf: "center" }}
      />
      
    </View>
  );
}
