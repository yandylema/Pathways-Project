import React, { useState } from "react";
import InputText from "../components/InputText";
import { CancelButton } from "../components/CancelButton";
import { BackButton } from "../components/BackButton";
import UploadBox from "../components/UploadBox";
import { useNavigate } from "react-router-dom";
import { items } from "../atoms";
import { useRecoilState } from "recoil";

export function AddItemPage(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [itemsForBorrowing, setItemsForBorrowing] = useRecoilState(items);
  return (
    <div>
      <div className="panel">
        <div>
          <BackButton>Add Item</BackButton>
          <p>Item name:</p>
          <InputText onChange={setName} placeholderInput={"Item"}></InputText>
          <p>Type name:</p>

          <InputText onChange={setType} placeholderInput={"Type"}></InputText>
        </div>
        <UploadBox
          setImage={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        ></UploadBox>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <CancelButton>Cancel</CancelButton>
        <button style={{
            display: "block",
            backgroundColor: "#73b504",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "100px",
            marginTop: "10px",
          }} onClick={()=>{
          console.log(itemsForBorrowing)
          setItemsForBorrowing([...itemsForBorrowing, [name, "You", image, itemsForBorrowing.length]])
          console.log(itemsForBorrowing)
          navigate("/welcome");}}>Add item</button>
        </div>
        </div>
      
    );
}
