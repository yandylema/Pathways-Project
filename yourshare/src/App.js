import React from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";

export const pages = {
  WelcomePage: "WelcomePage",
  CommunityPage: "CommunityPage",
  AddItemPage: "AddItemPage",
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: pages.AccountPage };
  }
  render() {
    let whichComponentToShow;

    console.log("this.state.currentPage: " + this.state.currentPage);
    switch (this.state.currentPage) {
      case pages.CommunityPage:
        whichComponentToShow = <CommunityPage changePage={this.changeScreen} />;
        break;
      case pages.AddItemPage:
        whichComponentToShow = <AddItemPage changePage={this.changeScreen} />;
        break;
      case pages.WelcomePage:
      default:
        whichComponentToShow = <WelcomePage changePage={this.changeScreen} />;
        break;
    }

    return <div className="App">{whichComponentToShow}</div>;
  }

  changeScreen = (nextPage) => {
    this.setState((state, props) => ({
      currentPage: nextPage,
    }));
  };
}

export default App;
