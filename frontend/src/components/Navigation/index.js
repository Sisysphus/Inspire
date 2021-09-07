import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import LoginFormPage from "../LoginFormPage";

function Navigation({ isLoaded, LoginFormPage }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="sign-up-thing">
        <NavLink className="nav-form" to="/signup">
          SignUp
        </NavLink>
        <LoginFormModal className="moddy" />
      </div>
    );
  }

  // const demobut = () => {
  //   if (!sessionUser) {
  //     sessionUser = <button type="button"
  //   }
  // };

  return (
    <div className="nav-div">
      <ul className="nav-ul">
        <li className="nav-li">
          {/* <NavLink exact to="/">
            <a className="mrhyperion" href="/">
              Inspire
            </a>
          </NavLink> */}
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
