import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BorrowItemPage } from "./pages/BorrowItemPage";
import { RecoilRoot } from "recoil";
import { AddFriendPage } from "./pages/AddFriendPage";
import { Nav } from "./components/Nav";

function AppRouter(){
return(
  <RecoilRoot>
  <Router>
    <Nav></Nav>
      <Routes>
        <Route path="/" end element={<SignupPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/borrowitem" element={<BorrowItemPage />} />
        <Route path="/addfriend" element={<AddFriendPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
  </RecoilRoot>);
};

export default AppRouter;
