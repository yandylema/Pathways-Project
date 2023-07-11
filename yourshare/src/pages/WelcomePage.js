
import React from "react";
import { pages } from "../App";
import { Table } from "../components/Table";

export class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Table data={[['header1','header2'], ['item1', 'item2']]}></Table>
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        </p>
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Community
        </p>
      </div>
    );
  }
}