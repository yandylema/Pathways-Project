import { View } from "react-native";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

export default function BusinessPlan() {
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 10,
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <PageTitle>Business Plan</PageTitle>
      <WhiteButton text="Executive Summary"></WhiteButton>
      <WhiteButton text="Mission"></WhiteButton>
      <WhiteButton text="Vision"></WhiteButton>
    </View>
  );
}
