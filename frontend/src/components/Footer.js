import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          What inspires you?
          <i className="fas fa-hamsa and-more" />
        </p>

        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Think"
            />
          </form>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <i className="fas fa-hamsa" />
          </div>
          <div className="social-icons">
            <i className="fab fa-linkedin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
