import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export function Nav() {
  const location = useLocation();
  return location.pathname === "/" ? null : (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(220,220,220)",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        display: "flex",
        justifyContent: "space-around",
        height: "50px",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          backgroundColor:
            location.pathname == "/welcome" ? "white" : "rgb(220,220,220)",
          width: "50%",
          borderTopRightRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        to={"/welcome"}
      >
        Items
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          width: "50%",
          backgroundColor:
            location.pathname == "/community" ? "white" : "rgb(220,220,220)",
          borderTopLeftRadius: "20px",
          
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        to={"/community"}
      >
        Community
      </Link>
    </div>
  );
}
