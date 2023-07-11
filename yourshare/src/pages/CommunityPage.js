import React from "react";
import { pages } from "../App";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import { Checkbox } from "../components/Checkbox";

export class CommunityPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage Community</h1>
        <p onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>
          Example Item
        </p>
        <p
          style={{ position: "fixed", top: "10px", left: "10px" }}
          onClick={(e) => this.props.changePage(pages.WelcomePage)}
        >
          Back
        </p>
        <p>
          <Button>jhgf</Button>
          <CancelButton changePage={this.props.changePage}>gvlg</CancelButton>
        </p>
        <Checkbox>Text me when someone wants to borrow an item</Checkbox>
        <Checkbox>Allow best friends to auto borrow without approval</Checkbox>
        <Checkbox>Block friends of friends from seeing my items</Checkbox>
      </div>
    );
  }
}
