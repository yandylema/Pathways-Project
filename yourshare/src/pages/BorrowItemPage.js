import React from "react";
import { pages } from "../App";

export class BorrowItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Borrow Item</h1>
        <p style={{position: "fixed", top: "10px", left:"10px"}} onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Back
        </p>
      </div>
    );
  }
}