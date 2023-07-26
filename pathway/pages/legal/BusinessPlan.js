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
        <WhiteButton text="Executive Summary. Pho Express is an authentic Vietnamese Pho restaurant opening in Seattle, WA, on November 1st, 2023. We aim to offer delicious and flavorful pho, using fresh ingredients, and providing a welcoming dining experience."></WhiteButton>
        <WhiteButton text="Mission"></WhiteButton>
        <WhiteButton text="Vision"></WhiteButton>
      </View>
    );
}

//How do I put a comp inside a comp ="{}"