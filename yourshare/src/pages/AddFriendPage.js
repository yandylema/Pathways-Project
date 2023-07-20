import React, { useState } from "react";
import InputText from "../components/InputText";
import { CancelButton } from "../components/CancelButton";
import Textbox from "../components/Textbox";
import { BackButton } from "../components/BackButton";
import UploadBox from "../components/UploadBox";
import { useNavigate } from "react-router-dom";
import { items } from "../atoms";
import { useRecoilState } from "recoil";
import { community } from "../atoms";

export function AddFriendPage(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [friends, setFriends] = useRecoilState(community);
  return (
    <div style={{display: "flex", alignItems: "center", width: "100vw", justifyContent: "center"}}>
    <div>
      <div className="panel">
        <div>
          <BackButton>Add Friend</BackButton>
          <p>Friend name:</p>
          <InputText onChange={setName} placeholderInput={"Friend"}></InputText>
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
          marginTop: "50px",
        }}
      >
        <CancelButton>Cancel</CancelButton>
        <button
          onClick={() => {
            setFriends([...friends, [name, false, image, friends.length]]);
            navigate("/community");
          }}
          style={{
            display: "block",
            backgroundColor: "#73b504",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "100px",
            marginTop: "10px",
          }}
        >
          Add Friend
        </button>
      </div>
    </div>
    </div>
  );
}
