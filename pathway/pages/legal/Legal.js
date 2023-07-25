import { Text, Button, View } from "react-native";
import WhiteButton from "../../components/WhiteButton";
import InfoButton from "../../components/InfoButton";
import ButtonWithI from "../../components/ButtonWithI";

export default function Legal({ navigation }) {
  return (
    <View>
      <Text>legal page</Text>
      <ButtonWithI
        onPress={() => {
          // navi
        }}
        text="Business Document"
      />
    </View>
  );
}
