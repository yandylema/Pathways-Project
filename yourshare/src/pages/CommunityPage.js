import React from "react";
// import { pages } from "../App";

export class CommunityPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Community</h1>
        <p onClick={(e) => this.props.changePage(pages.WelcomePage)}>
          Back
        </p>
      </div>
    );
  }
}