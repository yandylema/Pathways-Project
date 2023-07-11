import React from "react";

const button = {
  backgroundColor: "#61666f",
  color: "white",
  padding: "10px",
  border: "0",
};

export class Button extends React.Component {
  render() {
    return <button style={button}>{this.props.children}</button>;
  }
}
