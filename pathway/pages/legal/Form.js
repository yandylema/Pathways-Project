import { Text, ScrollView, View } from "react-native";
import InputField from "../../components/InputField";
import Checkbox from 'expo-checkbox';

export function Form({ navigation, route }) {
  const inputs = route.params.inputs;
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        // justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {inputs.map((input) => (
        <View>
          <Text>{input.name}</Text>
          {input.type == "checkbox" ? (
            <Checkbox
            // style={styles.checkbox}
            // value={isChecked}
            // onValueChange={setChecked}
            // color={isChecked ? '#4630EB' : undefined}
          />
          ) : null}
          {input.type == "text" ? <InputField></InputField> : null}
        </View>
      ))}
    </ScrollView>
  );
}
