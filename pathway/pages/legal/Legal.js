import { View, ScrollView } from "react-native";
import ButtonWithI from "../../components/ButtonWithI";
import GradientCard from "../../components/GradientCard";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

const forms = [
  {
    name: "Licenses",
    options: [
      {
        name: "Business License",
        inputs: [
          {
            question: "Nature of Business",
            type: "checkbox",
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
              // Add more answers for Question 1
            ],
          },
          {
            question: "Tax reporting status",
            type: "checkbox",
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
              // Add more answers for Question 1
            ],
          },
        ],
      },
      {
        name: "Alcohol License",
        inputs: [
          {
            question: "Business name",
            type: "text",
            answer: "",
          },
          {
            question: "Category",
            type: "text",
            answer: "",
          },
        ],
      },
    ],
  },
  {
    name: "Permits",
    options: [
      {
        name: "Food Service Permit",
        inputs: [
          { question: "Business name", type: "text", answer: "" },
          {
            question: "Will you employ people",
            type: "checkbox",
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
              // Add more answers for Question 1
            ],
          },
        ],
      },
      {
        name: "Other",
        inputs: [
          {
            question: "Business name",
            type: "text",
            answer: "",
          },
          {
            question: "Will you serve alcohol",
            type: "checkbox",
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
              // Add more answers for Question 1
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Other",
    options: [
      {
        name: "Other",
        inputs: [
          { question: "Business name", type: "text", answer: "" },
          {
            question: "Will you serve alcohol",
            type: "checkbox",
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
              // Add more answers for Question 1
            ],
          },
        ],
      },
      {
        name: "Other",
        inputs: [
          { question: "Business name", type: "text", answer: "" },
          {
            question: "Will you serve alcohol",
            type: "checkbox",
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
              // Add more answers for Question 1
            ],
          },
        ],
      },
    ],
  },
];

export default function Legal({ navigation }) {
  return (
    <ScrollView style={{maxWidth: 500, width: "100%", alignSelf: "center"}}>
      <PageTitle>Legal Documents</PageTitle>

      <WhiteButton
        text="View Business Plan"
        onPress={() => navigation.navigate("BusinessPlan")}
      ></WhiteButton>
      {forms.map((card, idx) => (
        <GradientCard key={idx} text={card.name}>
          {card.options.map((option, idx) => (
            <ButtonWithI
              key={idx}
              onPress={() => {
                console.log("dkfndjfndjfnfjdn")
                navigation.navigate("Form", { inputs: option.inputs });
              }}
              iPress={() => {
                navigation.navigate("DocumentInfo", { documentName: option.name });
              }}
              text={option.name}
            />
          ))}
        </GradientCard>
      ))}
    </ScrollView>
  );
}
