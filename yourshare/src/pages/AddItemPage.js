import React, { useState } from "react";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";
import UploadBox from "../components/UploadBox";
import logo from "../images/YS_upload.png";


export function AddItemPage (props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    return (
      <div>
        <div className="panel">
        <div>
        <BackButton>Add Item</BackButton>
        <p>Item name:</p>
        <InputText onchange={setName} placeholderInput = {"Item"}></InputText>
        <p>Type name:</p>
        <InputText onchange={setType} placeholderInput = {"Type"}></InputText>
        <p>Enter description</p>
        <Textbox onchange={setDescription} placeholderInput = {"Description"}></Textbox>
        </div>
         <div>
        <UploadBox><img src={logo} style={{width:"50px"}} alt=""></img></UploadBox> 
        </div>
      </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
        <CancelButton>Cancel</CancelButton>
        <Button to="/welcome" state={{name:name, type:type, description:description}}>Add item</Button>
        </div>
        </div>
      
    );
}

