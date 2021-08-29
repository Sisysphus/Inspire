import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer2.css";

const Footer2 = () => {
  return (
    <div className="footer-div">
      <div className="footer-wrap">
        <div className="footer-content">
          <div className="top-footer-content">
            <h1>Inspire: Keep yourself accountable</h1>
          </div>
          <ul>
            <li>
              <a href="www.google.com">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer2;
