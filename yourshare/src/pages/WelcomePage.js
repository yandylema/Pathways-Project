import React from "react";
import { Table } from "../components/Table";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ItemsToBorrowList } from "../components/ItemsToBorrow";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { items } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";

const container = {
  display: "flex",
};

export function WelcomePage(props) {
  const navigate = useNavigate();
  const itemsForBorrowing = useRecoilValue(items);

  return (
    <div>
      <div style={{maxWidth: "1200px", margin: "auto", paddingTop: "30px"}}>
      

      <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

        <div style={{width: "48%"}}>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Your items</h1>
        <button onClick={() => navigate("/additem")} className="greenButton">
          + Add Item
        </button>
      </div>

      <ItemsToBorrowList
        data={itemsForBorrowing.filter(item => item[1] === "You" || item[3] === "You")}
      ></ItemsToBorrowList>
      </div>

          <div style={{width: "48%"}}>
      <h1>Items for borrowing</h1>
      <ItemsToBorrowList
        data={itemsForBorrowing.filter(item => item[3] == null && item[1] !== "You")} showSearchBar={true}
      ></ItemsToBorrowList>
      </div>
      </div>
      
    </div>
    </div>
  );
}
