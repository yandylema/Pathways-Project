import React from "react";
import { pages } from "../App";
import blender from "../images/YS_blender.png";
import Textbox from "../components/Textbox";

export class BorrowItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Borrow Item</h1>

        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <img src={blender} className="right-image" />

        <Textbox></Textbox>
        <p
          style={{ position: "fixed", top: "10px", left: "10px" }}
          onClick={this.handleCancel}
        >
          Back
        </p>
      </div>
    );
  }
}
