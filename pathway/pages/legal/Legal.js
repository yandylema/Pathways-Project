import { View } from "react-native";
import ButtonWithI from "../../components/ButtonWithI";
import GradientCard from "../../components/GradientCard";
import PageTitle from "../../components/PageTitle";
<<<<<<< Updated upstream

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


=======
import WhiteButton from "../../components/WhiteButton";
>>>>>>> Stashed changes
export default function Legal({ navigation }) {
  return (
    <View>
      <PageTitle>Legal Documents</PageTitle>
<<<<<<< Updated upstream
      {forms.map(card => 
        <GradientCard text={card.name}>
          {card.options.map(option =>
            <ButtonWithI onPress={()=>{navigation.navigate("Form", {inputs: option.inputs})}} text={option.name}/>
          )}
        </GradientCard>
        
      )}
=======
      <WhiteButton
        onPress={() => navigation.navigate("BusinessPlan")}
        text="View Business Plan"
      ></WhiteButton>
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
>>>>>>> Stashed changes
    </View>
  );
}
