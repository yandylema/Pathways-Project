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
      <Nav></Nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Your items</h1>
        <button
          onClick={() => navigate("/additem")}
          style={{
            display: "block",
            backgroundColor: "#73b504",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "125px",
            marginTop: "10px",
          }}
        >
          + Add Item
        </button>
      </div>
      <ItemsToBorrowList
        data={itemsForBorrowing.filter(
          (item) => item[1] === "user" || item[3] === "user"
        )}
      ></ItemsToBorrowList>
      <h1>Items for borrowing</h1>
      <ItemsToBorrowList
        data={itemsForBorrowing.filter(
          (item) => item[3] == null && item[1] !== "user"
        )}
        showSearchBar={true}
      ></ItemsToBorrowList>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "15px",
          width: "50%",
        }}
      >
        <br></br>
      </div>
    </div>
  );
}
