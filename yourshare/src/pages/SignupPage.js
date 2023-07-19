import React from "react";
import InputText from "../components/InputText";
import logo from "../images/YS_icon.png";
import { Button } from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const signUpPage = {
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
};
const img = {
  width: "300px",
  height: "300px",
  paddingRight: "50px",
  marginTop: "100px",
};
export function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("asdsa");
  return (
    <div style={signUpPage}>
      <div className="logoSignUpPage">
        <img style={img} src={logo}></img>
      </div>
      <div className="signUpPageInfo">
        <h1>Join our community</h1>
        <h4> Sign-up</h4>
        <InputText onChange={setName} placeholderInput="Username: " />
        <InputText placeholderInput="Phone number:" />
        <InputText placeholderInput="Zip code: " />

        <button onClick={()=> navigate("/welcome")}>
          Join
        </button>
        <button onClick={()=> navigate("/welcome")}>Sign-in</button>
      </div>
    </div>
  );
}
