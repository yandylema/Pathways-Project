import React from "react";
import { pages } from "../App";

const cancelButton = {
  backgroundColor: "white",
  color: "#61666f",
  padding: "10px",
  border: "0",
};

export class CancelButton extends React.Component {
  render() {
    return (
      <button
        style={cancelButton}
        onClick={(e) => this.props.changePage(pages.WelcomePage)}
      >
        {this.props.children}
      </button>
    );
  }
}
