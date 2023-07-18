import React from "react";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ItemsToBorrowList } from "../components/ItemsToBorrow";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";

const startingData = [
  ["Rake", "Marcos", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Car", "Marcos", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Bike", "Cam", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Drill", "Stacey", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Ladder", "Marcos", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Kayak", "Cam", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["The Office DVD Box Set", "Stacey", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Cart", "Jim", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
];

const yourItems = [
  ["Broom", "Marcos", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Van", "Marcos", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"],
  ["Chair", "Cam", "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"]
];

const container = {
  display: "flex",
};

export function WelcomePage(props) {
  const [items, setItems] = useState(startingData);
  const [myitems, setMyItems] = useState(yourItems);


  const location = useLocation();
  console.log(location);
  const {name, type, description} = location.state;

  return (
    <div>
      <Nav></Nav>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <h1>Your items</h1>
      <Button to={"/additem"}>+ Add Item</Button>
      </div>
      <ItemsToBorrowList data={yourItems} borrowOrReturn={"return"}></ItemsToBorrowList>
      <h1>Items for borrowing</h1>
        <ItemsToBorrowList data={startingData} showSearchBar={true}></ItemsToBorrowList>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "15px",
            width: "50%"
          }}
        >
          
          
          <br></br>
          
      </div>
    </div>
  );
}
