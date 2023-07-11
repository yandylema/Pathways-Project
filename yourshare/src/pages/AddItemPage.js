import React from "react";
import { pages } from "../App";

export class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a cool item</h1>
        <h2>What will you add?</h2>
        <p style={{position: "fixed", top: "10px", left:"10px"}} onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Back
        </p>
      </div>
    );
  }
}