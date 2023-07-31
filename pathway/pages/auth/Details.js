import { Text, Button, View } from "react-native";
import InputField from "../../components/InputField";
import GrayCaption from "../../components/GrayCaption";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import PageTitle from "../../components/PageTitle";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";

const auth = getAuth();

export default function Details({ navigation, route }) {
  const email = route.params.email;
  const password = route.params.password;
  const [businessName, setBusinessName] = useState("");
  const [productName, setBusinessProduct] = useState("");
  const [locationName, setLocation] = useState("");
  const [businessType, setBusinessType] = useState("");

  const writeData = (
    businessId,
    businessName,
    businessProduct,
    businessLocation,
    businessType
  ) => {
    const db = getDatabase();
    set(ref(db, "businesses/" + businessId), {
      businessName: businessName,
      businessProduct: businessProduct,
      businessLocation: businessLocation,
      businessType: businessType,
    });
  };
  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const combinedFunction = () => {
    writeData();
    createUser();
  };
  console.log(businessName);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <AppTitle></AppTitle>
      <PageTitle>Business Details</PageTitle>
      <GrayCaption>This will help us personalize</GrayCaption>
      <GrayCaption>our services towards your business.</GrayCaption>
      <InputField
        placeholder={"Business name"}
        onWriteData={writeData}
        onChange={(text) => {
          setBusinessName(text);
        }}
        value={businessName}
      ></InputField>

      <InputField
        placeholder={"Business product"}
        onWriteData={writeData}
        onChange={(text) => {
          setBusinessProduct(text);
        }}
        value={productName}
      ></InputField>
      <InputField
        placeholder={"Location: City, State, Zip"}
        onWriteData={writeData}
        onChange={(text) => {
          setLocation(text);
        }}
        value={locationName}
      ></InputField>
      <InputField
        placeholder={"Business Type"}
        onWriteData={writeData}
        onChange={(text) => {
          setBusinessType(text);
        }}
        value={businessType}
      ></InputField>

      <PurpleButton text="Confirm" onPress={combinedFunction}></PurpleButton>
    </View>
  );
}
