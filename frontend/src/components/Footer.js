import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights"></small>
          <div className="social-icons">
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/adam-faidy-bb8784105/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;

// Alternate Footer

// import React from "react";
// import "./Navigation.css";

// import Helios from "../images/Helios.png";
// function Footer() {
//   return (
//     <div className="footer-div">
//       <div className="footer-wrapper">
//         <h1 className="footer-logo" href="/">
//           Hyperion
//         </h1>
//         <ul className="footer-ul">
//           <li>
//             <i class="fas fa-home icon2"></i>
//             <a href="/" className="footer-a">
//               Home
//             </a>
//           </li>
//           <li>
//             <i class="fab fa-github icon2"></i>
//             <a href="https://github.com/Sisysphus" className="footer-a">
//               Github
//             </a>
//           </li>
//           <li>
//             <i class="fab fa-linkedin icon2"></i>
//             <a
//               href="https://www.linkedin.com/in/adam-faidy-bb8784105/"
//               className="footer-a"
//             >
//               LinkedIn
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Footer;
