import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer2.css";

const Footer2 = () => {
  return (
    <div className="footer-div">
      <div className="footer-wrap">
        <div className="footer-content">
          <div className="top-footer-content">
            <h1>Inspire: Keep yourself accountable</h1>
          </div>
          <div className="social-iconz">
            <ul id="ulicon">
              <li className="lieed">
                <a href="www.google.com">
                  <FacebookIcon />
                </a>
              </li>
              <li className="lieed">
                <a href="https://github.com/Sisysphus">
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer2;
