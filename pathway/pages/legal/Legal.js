import { View } from "react-native";
import ButtonWithI from "../../components/ButtonWithI";
import GradientCard from "../../components/GradientCard";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

const forms = [
  {
  "name": "Licenses",
  "options": [
    {
      name: "Business License",
      inputs : [
        {name: "Business name", type: "text"},
        {name: "Will you employ people", type: "checkbox"},
        {name: "Business name", type: "text"},
        {name: "Business name", type: "text"},
        {name: "Business name", type: "text"},
        {name: "Business name", type: "text"},
        {name: "Business name", type: "text"},
        {name: "Will you employ people", type: "checkbox"},
        {name: "Will you employ people", type: "checkbox"},
      ]
    },
    {
      name: "Alcohol License",
      inputs : [
        {name: "Business name", type: "text"},
        {name: "Will you serve alcohol", type: "checkbox"},
      ]
    },
  ]},
  {
    "name": "Permits",
    "options": [
      {
        name: "Food Service Permit",
        inputs : [
          {name: "Business name", type: "text"},
          {name: "Will you employ people", type: "checkbox"},
        ]
      },
      {
        name: "Other",
        inputs : [
          {name: "Business name", type: "text"},
          {name: "Will you serve alcohol", type: "checkbox"},
        ]
      },
    ]},
    {
      "name": "Other",
      "options": [
        {
          name: "Employee ID number",
          inputs : [
            {name: "Business name", type: "text"},
            {name: "Will you employ people", type: "checkbox"},
          ]
        },
        {
          name: "Certificate Of Occupancy",
          inputs : [
            {name: "Business name", type: "text"},
            {name: "Will you serve alcohol", type: "checkbox"},
          ]
        },
      ]},
]


export default function Legal({ navigation }) {
  return (
    <View>
      <PageTitle>Legal Documents</PageTitle>
      
      <WhiteButton
        text="View Business Plan"
        onPress={() => navigation.navigate("BusinessPlan")}
      ></WhiteButton>
      {forms.map((card) => (
        <GradientCard text={card.name}>
          {card.options.map((option) => (
            <ButtonWithI
              onPress={() => {
                navigation.navigate("Form", { inputs: option.inputs });
              }}
              text={option.name}
            />
          ))}
        </GradientCard>
      ))}
    </View>
  );
}
