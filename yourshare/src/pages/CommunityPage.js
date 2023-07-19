import React from "react";
import { Checkbox } from "../components/Checkbox";
import { Table } from "../components/Table";
import { BackButton } from "../components/BackButton";
import { useState } from "react";
import { Persona } from "../components/Persona";
import { PersonCard } from "../components/PersonCard";
import { Nav } from "../components/Nav";
import { community } from "../atoms";
import { useRecoilValue } from "recoil";
import { items } from "../atoms";
import { Link } from "react-router-dom";

const personCards = {
  display: "flex",
  margin: "25px",
};
const startingData = [
  [
    "Stacey",
    "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
    [],
    ["item1", "item2"],
  ],
  [
    "Lily",
    "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
    ["item1", "item2"],
    [],
  ],
  [
    "Haley",
    "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
    ["item1", "item2"],
    ["item1", "item2"],
  ],
];

export function CommunityPage() {
  const friends = useRecoilValue(community);
  const itemsForBorrowing = useRecoilValue(items);
  return (
    <div>
      <Nav></Nav>
      <BackButton>Manage Community</BackButton>{" "}
      <div>
        <h1>Community</h1>
        <div className="personCards" style={personCards}>
          {friends.map((person) => (
            <PersonCard
              name={person[0]}
              image={person[2]}
              isBestfriend={person[1]}
              items={itemsForBorrowing.filter((item) => item[1] === person[0])}
            ></PersonCard>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <div>
            <Checkbox>Text me when someone wants to borrow an item</Checkbox>
            <Checkbox>
              Allow best friends to auto borrow without approval
            </Checkbox>
            <Checkbox>Block friends of friends from seeing my items</Checkbox>
          </div>
          <div style={{ marginRight: "20px", marginTop: "25px" }}>
            <Link to={"/addfriend"}>
              <button
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
