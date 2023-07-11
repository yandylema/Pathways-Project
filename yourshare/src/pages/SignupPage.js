import React from "react";
import { pages } from "../App";
import InputText from "../components/InputText";
import logo from "../images/YS_icon.png";

const signUpPage = {
  margin: "auto",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-around",
};
const img = {
  width: "450px",
  height: "450px",
  paddingRight: "250px",
};
export class SignupPage extends React.Component {
  render() {
    return (
      <div style={signUpPage}>
        <div className="logoSignUpPage">
          <img style={img} src={logo}></img>
        </div>
        <div className="signUpPageInfo">
          <h1>Join our community</h1>
          <h4> Sign-up</h4>
          <InputText placeholderInput="Username: " />
          <InputText placeholderInput="Phone number:" />
          <InputText placeholderInput="Zip code: " />

          <button onClick={(e) => this.props.changePage(pages.WelcomePage)}>
            Join
          </button>
          <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
            Sign-in
          </p>
        </div>
      </div>
    );
  }
}
