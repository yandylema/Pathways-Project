import React from "react";
import { Link } from "react-router-dom";

const button = {
  backgroundColor: "#61666f",
  color: "white",
  padding: "10px",
  paddingRight:"25px",
  paddingLeft:"25px",
  border: "0",
  marginTop: "15px",
  marginBottom:"20px"
  
  
};

export class Button extends React.Component {
  render() {
    return(<Link to={this.props.to}>
    <button style={button}>{this.props.children}</button>
    </Link>);
  }
}
