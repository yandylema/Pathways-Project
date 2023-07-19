import { useState } from "react";
import { Item } from "./Item";
export function ItemsToBorrowList(props) {
  const [search, setSearch] = useState("")
  return (
    <div>
      {props.showSearchBar ? (
        <input
          type="text"
          style={{
            width: "95%",
            display: "block",
            margin: "auto",
            backgroundColor: "rgb(129 199 9 / 13%)",
            border: "2px solid green",
            borderRadius: "15px",
            height: "25px",
            color: "black",
            marginBottom: "20px",
          }}
          onChange={(e)=>{setSearch(e.target.value)}}
        ></input>
      ) : null}
      <div>
        {props.data.filter(item => item[0].toLowerCase().includes(search.toLowerCase())).map((item) => (
          <Item item={item}></Item>
        ))}
      </div>
    </div>
  );
}
