import React, { useState } from "react";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";

export function AddItemPage (props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    return (
      <>
      <BackButton>Add Item</BackButton>
      <div style={{display: "flex"}}>
        
        <div style={{marginRight: "100px", paddingTop: "20px"}}>
        {/* <p>Item name:</p> */}
        <InputText onchange={setName} placeholderInput = {"Item name:"}></InputText>
        {/* <p>Type:</p> */}
        <InputText onchange={setType} placeholderInput = {"Type:"}></InputText>
        </div>
        <div>
        <p>Description</p>
        <Textbox onchange={setDescription}></Textbox>
        </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
        <CancelButton>Cancel</CancelButton>
        <Button to="/welcome" state={{name:name, type:type, description:description}}>Add item</Button>
        </div>
        
      
      </>
    );
}