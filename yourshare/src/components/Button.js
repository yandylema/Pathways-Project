import React from "react";

const button = {
  backgroundColor: "#61666f",
  color: "white",
  padding: "10px",
  border: "0",
  margin: "10px"
};

export class Button extends React.Component {
  render() {
    return <button style={button} onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
