import React from "react";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";
import UploadBox from "../components/UploadBox"


export class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <div className="panel">
        <div>
        <BackButton>Add Item</BackButton>
        <p>Item name:</p>
        <InputText placeholderInput = {"Item"}></InputText>
        <p>Type name:</p>
        <InputText placeholderInput = {"Type"}></InputText>
        <p>Description</p>
        <Textbox></Textbox>
        </div>
         <div>
        <UploadBox></UploadBox> 
        </div>
      </div>
        <CancelButton>Cancel</CancelButton>
        <Button>Add item</Button>
      </div>
    );
  }
}