import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
const Count = ({ count }) => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="wrappercont">
      <div className="count">
        <h4>{count}</h4>
        {sessionUser ? "" : "Log in to use"}
        <div className="anotherone"></div>
      </div>
    </div>
  );
};

export default Count;
