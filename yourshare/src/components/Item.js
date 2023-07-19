import { useRecoilState } from "recoil";
import { Persona } from "./Persona";
import { items } from "../atoms"
import { community } from "../atoms";
import { useNavigate } from "react-router-dom";


export function Item(props) {
  const [itemsList, setItemsList] = useRecoilState(items);
  const [friends, setFriends]= useRecoilState(community);
  const navigate = useNavigate();

  let buttonText;
  if (props.item[1] === "You") {
    buttonText = "Lend";
  } else if (props.item[3] === "You") {
    buttonText = "Return";
  } else {
    buttonText = "Borrow";
  }
  
  console.log(props.item[1])

  return (
    <div
      style={{
        display: "inline-block",
        margin: "10px",
        backgroundColor: "rgb(129 199 9 / 13%)",
        borderRadius: "20px",
        padding: "18px",
        paddingTop: "12px",
        wdith: "186px",
        height: "266px"
        // boxShadow: "0 0 10 px 0px gray",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5 style={{ marginBottom: "5px" }}>{props.item[0]}</h5>
        <img
      style={{ width: "50px", height: "50px", borderRadius: "100%" }}
      src={friends.find(friend => props.item[1] == friend[0])[2] }
      alt="test"
    ></img>
      </div>
      <img style={{ width: "150px" }} src={props.item[2]}></img>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            display: "block",
            backgroundColor: "#73b504",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "80%",
            marginTop: "10px",
          }}
          onClick={()=> {
            navigate("/borrowitem", {state: {item: props.item, buttonText: buttonText}})
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
