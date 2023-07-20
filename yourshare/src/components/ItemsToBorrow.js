import { useState } from "react";
import { Item } from "./Item";
import "./ItemsToBorrow.css";

export function ItemsToBorrowList(props) {
  const [search, setSearch] = useState("")
  return (
    <div className="itemsContainer">
        <>
        <br></br>
        <input
          type="text"
          className="searchBar"
          onChange={(e)=>{setSearch(e.target.value)}}
          placeholder="Filter by name"
        ></input>
        </>
  
      <div>
        {props.data.filter(item => item[0].toLowerCase().includes(search.toLowerCase())).map((item) => (
          <Item item={item}></Item>
        ))}
      </div>
    </div>
  );
}
