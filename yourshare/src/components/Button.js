import React from "react";

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

export function Button(props) {
  console.log(props);
  return (
    <button onClick={props.epic} style={button}>
      {this.props.children}
    </button>
  );
}
