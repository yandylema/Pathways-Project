import { View } from "react-native";
import InputField from "../../components/InputField";
import GrayCaption from "../../components/GrayCaption";
import { AppTitle } from "../../components/AppTitle";
import PurpleButton from "../../components/PurpleButton";
import PageTitle from "../../components/PageTitle";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { useState } from "react";
import { useAuthentication } from "../../utils/useAuthentication";

const auth = getAuth();

export default function Details({ navigation, route }) {
  const email = route.params.email;
  const password = route.params.password;
  const [businessName, setBusinessName] = useState("");
  const [productName, setBusinessProduct] = useState("");
  const [locationName, setLocation] = useState("");
  const [businessType, setBusinessType] = useState("");

  const writeData = (
    businessName,
    businessProduct,
    businessLocation,
    businessType
  ) => {
    const db = getDatabase();
    const businessesRef = ref(db, "businesses/");
    get(businessesRef).then((snapshot) => {
      set(ref(db, "businesses/" + snapshot.size), {
        businessName: businessName,
        businessProduct: businessProduct,
        businessLocation: businessLocation,
        businessType: businessType,
        completed_forms: {
          licenses: {
            1: false,
            2: false,
          },
          permits: {
            1: false,
            2: false,
          }, other: {
            1: false,
            2: false,
          }
        },
        settings: {
          language: "",
          notifications: false,
        },
        websiteURL: "",
      });
    });
  };
  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const combinedFunction = () => {
    // Pass all the required arguments to writeData function
    writeData(businessName, productName, locationName, businessType);
    createUser();
  };
  console.log(businessName);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center",
        maxWidth: 500,
        alignSelf: "center"
      }}
    >
      <AppTitle></AppTitle>
      <PageTitle>Business Details</PageTitle>
      <GrayCaption>This will help us personalize</GrayCaption>
      <GrayCaption>our services towards your business.</GrayCaption>
      <InputField
        placeholder={"Business name"}
        onChange={(text) => {
          setBusinessName(text);
        }}
        value={businessName}
      ></InputField>

      <InputField
        placeholder={"Business product"}
        onChange={(text) => {
          setBusinessProduct(text);
        }}
        value={productName}
      ></InputField>
      <InputField
        placeholder={"Location: City, State, Zip"}
        onChange={(text) => {
          setLocation(text);
        }}
        value={locationName}
      ></InputField>
      <InputField
        placeholder={"Business Type"}
        onChange={(text) => {
          setBusinessType(text);
        }}
        value={businessType}
      ></InputField>

      <PurpleButton text="Confirm" onPress={combinedFunction}></PurpleButton>
    </View>
  );
}
