import React from "react";
import { Link } from "react-router-dom";

const button = {
  backgroundColor: "#61666f",
  color: "white",
  padding: "10px",
  border: "0",
  margin: "10px"
};

export class Button extends React.Component {
  render() {
    return(<Link to={this.props.to}>
    <button style={button}>{this.props.children}</button>
    </Link>);
  }
}
