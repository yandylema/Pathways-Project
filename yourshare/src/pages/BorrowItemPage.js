import React from "react";
import { pages } from "../App";
import blender from "../images/YS_blender.png";
import Textbox from "../components/Textbox";
import { CancelButton } from "../components/CancelButton";
import InputText from "../components/InputText";
import { Button } from "../components/Button";

export class BorrowItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Borrow Item</h1>

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

        <p
          style={{ position: "fixed", top: "10px", left: "10px" }}
          onClick={this.props.changePage}
        >
          Back
        </p>
      </div>
    );
  }
}
