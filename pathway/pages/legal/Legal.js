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
            answers: [
              { id: 1, label: "Answer 1", isChecked: false },
              { id: 2, label: "Answer 2", isChecked: false },
            ],
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
    name: "Permits",
    options: [
      {
        name: "Food Service Permit",
        inputs: [
          { question: "Business name", type: "text" },
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
          { question: "Business name", type: "text" },
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
          { question: "Business name", type: "text" },
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
          { question: "Business name", type: "text" },
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
    <ScrollView>
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
                navigation.navigate("Form", { inputs: option.inputs });
              }}
              text={option.name}
            />
          ))}
        </GradientCard>
      ))}
    </ScrollView>
  );
}
