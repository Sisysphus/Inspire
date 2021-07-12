import React, { useState } from "react";
import "./Header.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
// import Navigation from "./Navigation/index";
// import SignupFormPage from "../components/SignupFormPage/index";
// import ProfileButton from "./Navigation/ProfileButton";
const Header = ({ user }) => {
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false);
  };

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
          <Link to="/" className="hvr-grow" onClick={closeMenu}>
            <h3 className="inspirator">Inspired</h3>
          </Link>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Header;
