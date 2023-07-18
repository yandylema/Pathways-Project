import React from "react";
import { Table } from "../components/Table";
import { Button } from "../components/Button";

const startingData = [
  ["Items for borrowing", "Lender"],
  ["Rake", "Marcos"],
  ["Car", "Marcos"],
  ["Bike", "Cam"],
  ["Drill", "Stacey"],
  ["Ladder", "Marcos"],
  ["Kayak", "Cam"],
  ["The Office DVD Box Set", "Stacey"],
  ["Cart", "Jim"],
];

const yourItems = [
  ["Your items", "Lent to"],
  ["Add your first item", "A friend"],
];

const container = {
  display: "flex",
};

export function AddItems() {
  const [array, setArray] = useState([]);
  const addItems = () => {
    const nextVal = array.length + 1;
    array.push(nextVal);
    setArray(array);
  };
  return (
    <div>
      <p>{array.join(",")}</p>
      <button onClick={addItems}>Add item</button>
    </div>
  );
}

export class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div style={container}>
          <Table data={startingData}></Table>
          <div>
            <Table data={yourItems}></Table>
            <Button to={"/additem"}>Add Item</Button>
            <br></br>
            <Button to={"/community"}>Manage Community</Button>
          </div>
        </div>
      </div>
    );
  }
}
