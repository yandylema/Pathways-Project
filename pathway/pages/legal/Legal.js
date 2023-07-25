import { Text, Button, View } from "react-native";
import ButtonWithI from "../../components/ButtonWithI";
import GradientCard from "../../components/GradientCard";
import PageTitle from "../../components/PageTitle";

export default function Legal({ navigation }) {
  return (
    <View>
      <PageTitle>Legal Documents</PageTitle>
      <GradientCard text="Licenses">
        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Business License "
        />

        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Alchohol License"
        />
      </GradientCard>
      <GradientCard text="Permits">
        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Food Service Permit "
        />
        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Building and Zoning Permit"
        />
        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Sellers Permit "
        />
      </GradientCard>
      <GradientCard text="Certificates">
        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Employee ID Number "
        />

        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Certificate of Occupancy"
        />
      </GradientCard>
    </View>
  );
}
