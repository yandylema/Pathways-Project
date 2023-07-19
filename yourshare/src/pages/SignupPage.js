import React from "react";
import InputText from "../components/InputText";
import logo from "../images/YS_icon.png";
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
  const [name, setName] = useState("You");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  return (
    <div style={signUpPage}>
      <div className="logoSignUpPage">
        <img style={img} src={logo} alt=""></img>
      </div>
      <div className="signUpPageInfo">
        <h1>Join our community</h1>
        <h4> Sign-up</h4>
        <InputText onChange={setName} placeholderInput="Username: " />
        <InputText onChange={setPhone} placeholderInput="Phone number:" />
        <InputText onChange={setZipcode} placeholderInput="Zip code: " />

        <button
          style={{
            backgroundColor: "#73b504",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "100px",
            marginTop: "10px",
            marginRight: "10px",
          }}
          onClick={() => navigate("/welcome")}
        >
          Join
        </button>
        <button
          style={{
            backgroundColor: "#73b504",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "100px",
            marginTop: "10px",
          }}
          onClick={() => navigate("/welcome")}
        >
          Sign-in
        </button>
      </div>
    </div>
  );
}
