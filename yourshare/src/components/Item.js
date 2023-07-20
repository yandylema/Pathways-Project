import { useRecoilState } from "recoil";
import { Persona } from "./Persona";
import { items } from "../atoms"
import { community } from "../atoms";
import { useNavigate } from "react-router-dom";
import "./Item.css"


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
      className="Item"
      onClick={()=> {
        navigate("/borrowitem", {state: {item: props.item, buttonText: buttonText}})
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
      <img style={{ width: "80%" }} src={props.item[2]} alt=""></img>

    </div>
  );
}
