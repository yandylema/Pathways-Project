import React from "react";
import InputText from "../components/InputText";
import logo from "../images/YS_icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const signUpPage = {
  // margin: "auto",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
};
const img = {
  width: "350px",
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
    <>
      <div style={{
            height: "100vh",
            backgroundColor: "rgb(240,240,240)",
            paddingTop: "30vh",
            paddingLeft: "200px"
          }}>
        <h1
          style={{color: "#73b504",
          fontSize: "130px", marginBottom: "0px"}}
        >
          <span style={{ color: "black" }}>Your</span>Share
        </h1>
        <h5 style={{fontWeight: "400", color: "gray"}}>Connect with your community: share your resources.</h5>
        <button className="greenButton" onClick={()=>document.getElementById("formDiv").scrollIntoView({ behavior: 'smooth', block: 'center' })}>Sign up</button>
        <button className="whiteButton" onClick={()=>document.getElementById("formDiv").scrollIntoView({ behavior: 'smooth', block: 'center' })}>Sign in</button>
      </div>

      <div id="formDiv" style={signUpPage}>
        <div className="logoSignUpPage">
          <img style={img} src={logo} alt=""></img>
        </div>
        <div className="signUpPageInfo">
          <h1>Join our community</h1>
          <InputText onChange={setName} placeholderInput="Username: " />
          <InputText onChange={setPhone} placeholderInput="Phone number:" />
          <InputText onChange={setZipcode} placeholderInput="Zip code: " />

          <button className="greenButton" onClick={() => navigate("/welcome")}>
            Sign up
          </button>
          <button
            className="whiteButton"
            onClick={() => navigate("/welcome")}
          >
            Sign-in
          </button>
        </div>
      </div>
    </>
  );
}
