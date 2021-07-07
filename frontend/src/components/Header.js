import React, { useState } from "react";
import "./Header.css";
// import { Route, Switch } from "react-router-dom";
// import Navigation from "./Navigation/index";
// import SignupFormPage from "../components/SignupFormPage/index";
// import ProfileButton from "./Navigation/ProfileButton";
const Header = ({ user }) => {
  const logo = (
    <img
      srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
      alt="logo"
    ></img>
  );
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div className="header-wrap">
        <div className="header">
          {logo}
          <h3>Inspired</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
