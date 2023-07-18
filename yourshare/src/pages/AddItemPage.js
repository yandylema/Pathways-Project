import React, { useState } from "react";
import InputText from "../components/InputText";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";
import UploadBox from "../components/UploadBox"


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
        <InputText onChange={setName} placeholderInput = {"Item"}></InputText>
        <p>Type name:</p>
        <InputText onChange={setType} placeholderInput = {"Type"}></InputText>
        <p>Description</p>
        <Textbox onchange={setDescription}></Textbox>
        </div>
         <div>
        <UploadBox></UploadBox> 
        </div>
      </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
        <CancelButton>Cancel</CancelButton>
        <Button to="/welcome" state={{name:name, type:type, description:description}}>Add item</Button>
        </div>
        </div>
      
    );
}

