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
            question: "Legal name of Business Entity",
            type: "text",
            answer: "",
          },
          {
            question: "Trade name",
            type: "text",
            answer: "",
          },
          {
            question: "Starting Date",
            type: "text",
            answer: "",
          },
          {
            question: "Physical Business Location",
            type: "text",
            answer: "",
          },
          {
            question: "List other Business Locations in Seattle",
            type: "text",
            answer: "",
          },
          {
            question: "Nature of Business",
            type: "text",
            answer: "",
          },
          {
            question:
              "Names of Sole Proprietor, Parters, Corporate Officers, and Resident Agents",
            type: "text",
            answer: "",
          },
          {
            question: "Tax reporting status",
            type: "checkbox",
            answers: [
              {
                id: 1,
                label: "I understand the tax filing requirements",
                isChecked: false,
              },
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
              { id: 1, label: "Yes", isChecked: false },
              { id: 2, label: "No", isChecked: false },
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
            question: "What is the category of your product? ",
            type: "text",
            answers: " ",
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
