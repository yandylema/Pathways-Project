import React from "react";
import { pages } from "../App";

export class AddItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Add item</h1>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Back
        </p>
      </div>
    );
  }
}