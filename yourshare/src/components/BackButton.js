import React from "react";
import { Link } from "react-router-dom";
import back from "../images/back.png"


const button = {
    display: "flex",
    marginTop: "50px",
    marginBottom: "30px",
};

const icon = {
    width: "40px",
    marginRight: "10px"
}

const backText = {
    color: "black",
    fontWeight: "600",
    fontSize: "30px",
}


export class BackButton extends React.Component {
  render() {
    return (
        <Link to="/welcome" style={{textDecoration: "none"}}>
      <div style={button}>
      <img style={icon} src={back} alt="back" />
        <span style={backText}>{this.props.children}</span>
      </div>
      </Link>
    );
  }
}
