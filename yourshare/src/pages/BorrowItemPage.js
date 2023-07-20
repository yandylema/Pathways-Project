import React from "react";
import Textbox from "../components/Textbox";
import { CancelButton } from "../components/CancelButton";
import InputText from "../components/InputText";
import { BackButton } from "../components/BackButton";
import { Nav } from "../components/Nav";
import { useRecoilState } from "recoil";
import { items } from "../atoms";
import { community } from "../atoms";
import { useLocation, useNavigate } from "react-router-dom";

export function BorrowItemPage(props) {
  const [itemsList, setItemsList] = useRecoilState(items);
  const { state } = useLocation();
  const { item, buttonText } = state;
  const navigate = useNavigate();

  return (
    <div style={{display: "flex", alignItems: "center", width: "100vw", justifyContent: "center"}}>
    <div>
      
      <BackButton>{buttonText} Item</BackButton>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <p>Item: {item[0]}</p>
          <p>Owner: {item[1]}</p>
        </div>
        <div>
          <img width={325} src={item[2]} className="right-image" />
          <div>
            <CancelButton>Cancel</CancelButton>
            <button
              style={{
                backgroundColor: "#73b504",
                border: 0,
                color: "white",
                padding: "10px",
                borderRadius: "10px",
                width: "100px",
              }}
              onClick={() => {
                let newArr = structuredClone(itemsList);
                console.log(newArr);
                if (buttonText === "Borrow") {
                  for (var i = 0; i < newArr.length; i++) {
                    if (newArr[i][4] === item[4]) {
                      newArr[i][3] = "You";
                    }
                  }
                } else if (buttonText === "Lend" || buttonText === "Return") {
                  for (var j = 0; j < newArr.length; j++) {
                    if (newArr[j][4] === item[4]) {
                      newArr[j][3] = null;
                    }
                  }
                }
                setItemsList(newArr);
                navigate("/welcome");
              }}
            >
              {buttonText}
            </button>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
