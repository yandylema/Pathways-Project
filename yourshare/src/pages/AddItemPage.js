import React from "react";
import { pages } from "../App";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";

const h1 = {
  paddingLeft:"150px"
}
const textbox = {
  width:"500px",
  height: "450px"
}

export class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1 style={h1}>Add an item</h1>
        <p>Item name:</p>
        <InputText placeholderInput = {"Item name:"}></InputText>
        <p>Type:</p>
        <InputText placeholderInput = {"Type:"}></InputText>
        <p>Description</p>
        <Textbox style={textbox}></Textbox>
        <p style={{position: "fixed", top: "10px", left:"10px"}} onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Back
        </p>
        <CancelButton>Cancel</CancelButton>
        <Button>Add item</Button>
      </div>
    );
  }
}