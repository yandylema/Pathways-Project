import React from "react";
import { pages } from "../App";

export class BorrowItemPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Borrow Item</h1>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Join
        </p>
      </div>
    );
  }
}