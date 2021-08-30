import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="logsignwrap">
          <LoginFormModal />
          <NavLink className="sign-upp" to="/signup">
            SignUp<i className="fas fa-user-plus"></i>
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="nav-div">
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink exact to="/">
            <a className="mrhyperion" href="/">
              Hyperion
            </a>
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
