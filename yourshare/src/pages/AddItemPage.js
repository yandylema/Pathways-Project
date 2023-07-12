import React from "react";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";

export class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <BackButton>Add Item</BackButton>
        <p>Item name:</p>
        <InputText placeholderInput = {"Item name:"}></InputText>
        <p>Type:</p>
        <InputText placeholderInput = {"Type:"}></InputText>
        <p>Description</p>
        <Textbox></Textbox>
        
        <CancelButton>Cancel</CancelButton>
        <Button>Add item</Button>
      </div>
    );
  }
}