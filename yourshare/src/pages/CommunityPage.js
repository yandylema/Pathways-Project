import React from "react";
import { pages } from "../App";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Table } from "../components/Table";

const startingData = [
  ["Friends", "Items currently borrowed", "Items currently lent", "Bestfriend"],
  ["Stacey", "None", "None", <Checkbox></Checkbox>],
  ["Marcos", "None", "None", <Checkbox></Checkbox>],
  ["Cam", "None", "None", <Checkbox></Checkbox>],
  ["Jim", "None", "None", <Checkbox></Checkbox>],
];

export class CommunityPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage Community</h1>
        <div>
          <Table data={startingData}></Table>
        </div>
        <p
          style={{ position: "fixed", top: "10px", left: "10px" }}
          onClick={(e) => this.props.changePage(pages.WelcomePage)}
        >
          Back
        </p>
        <p>
          <Button>Add Friend</Button>
        </p>
        <Checkbox>Text me when someone wants to borrow an item</Checkbox>
        <Checkbox>Allow best friends to auto borrow without approval</Checkbox>
        <Checkbox>Block friends of friends from seeing my items</Checkbox>
      </div>
    );
  }
}
