import React from "react";
import { Link } from "react-router-dom";

const button = {
  backgroundColor: "rgb(90, 141, 3)",
  color: "white",
  padding: "10px",
  paddingRight: "25px",
  paddingLeft: "25px",
  border: "0",
  margin: "10px",
  marginTop: "15px",
  borderRadius: "10px",
};

export class Button extends React.Component {
  render() {
    return(<Link to={this.props.to} state={this.props.state}>
    <button style={button}>{this.props.children}</button>
    </Link>);
  }
}
