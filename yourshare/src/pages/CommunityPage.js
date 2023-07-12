import React from "react";
import { Button } from "../components/Button";
import { CancelButton } from "../components/CancelButton";
import { Checkbox } from "../components/Checkbox";
import { BackButton } from "../components/BackButton";

export class CommunityPage extends React.Component {
  render() {
    return (
      <div>
        <BackButton>Manage Community</BackButton>
        <Button to={"/borrowitem"}>
            Example Item
          </Button>
        <p>
          <Button>jhgf</Button>
          <CancelButton>gvlg</CancelButton>
        </p>
        <Checkbox>Text me when someone wants to borrow an item</Checkbox>
        <Checkbox>Allow best friends to auto borrow without approval</Checkbox>
        <Checkbox>Block friends of friends from seeing my items</Checkbox>
      </div>
    );
  }
}
