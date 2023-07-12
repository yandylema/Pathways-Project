import React from "react";
import blender from "../images/YS_blender.png";
import Textbox from "../components/Textbox";
import { CancelButton } from "../components/CancelButton";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { BackButton } from "../components/BackButton";

export class BorrowItemPage extends React.Component {
  render() {
    return (
      <div>
        <BackButton>Borrow Item</BackButton>

        <div style={{ display: "flex" }}>
          <div>
            <InputText placeholderInput={"Item name: Blender"}></InputText>
            <InputText placeholderInput={"Type: Kitchen"}></InputText>
            <InputText placeholderInput={"Lender: Stacey"}></InputText>
            <Textbox></Textbox>
          </div>
          <div>
            <img src={blender} className="right-image" />
            <div>
              <CancelButton>Cancel</CancelButton>
              <Button>Request to Borrow</Button>
            </div>
          </div>
        </div>

        
        
      </div>
    );
  }
}
