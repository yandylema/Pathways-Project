import React from "react";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";
import { useState } from "react";

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

export class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <BackButton>Add Item</BackButton>
        <p>Item name:</p>
        <InputText placeholderInput={"Item name:"}></InputText>
        <p>Type:</p>
        <InputText placeholderInput={"Type:"}></InputText>
        <p>Description</p>
        <Textbox></Textbox>
        <CancelButton>Cancel</CancelButton>
        <Button>Add item</Button>
      </div>
    );
  }
}
