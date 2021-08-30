import React from "react";
import "./Navigation.css";

// import Helios from "../images/Helios.png";
function Header() {
  return (
    <div className="header-div">
      <div className="h1-wrap">
        <div className="h1-p1-wrap">
          <h1 className="h1-header">Welcome Inspire</h1>
          <p className="p-header">Sign up to Inspire</p>
        </div>
        <img className="helios" src={Helios} />
      </div>
    </div>
  );
}

export default Header;
