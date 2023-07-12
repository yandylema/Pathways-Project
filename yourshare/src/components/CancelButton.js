import React from "react";
import { Link } from "react-router-dom";

const cancelButton = {
  backgroundColor: "white",
  color: "#61666f",
  padding: "10px",
  border: "0",
};

export class CancelButton extends React.Component {
  render() {
    return (
      <Link to={"/welcome"}>
      <button
        style={cancelButton}
      >
        {this.props.children}
      </button>
      </Link>
    );
    
  }
}
