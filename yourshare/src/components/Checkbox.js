import React from "react";

const checkbox = {
  width: "25px",
  height: "25px",
  cursor: "pointer",
};

const container = {
  verticalAlign: "middle",
};

export class Checkbox extends React.Component {
  render() {
    return (
      <div style={container}>
        <input type="checkbox" style={checkbox}></input>
        <label>{this.props.children}</label>
      </div>
    );
  }
}
