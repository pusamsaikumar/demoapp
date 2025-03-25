import React from "react";
import "./mobilenav.css";
import sailogo from "../../assests/images/sailogo2.jpg";

const MobileNavbar = ({ isOpen, togglemenu }) => {
  return (
    <div
      className={`mobile-menu ? ${isOpen ? "active" : ""}`}
      onClick={togglemenu}
    >
      <div className="mobile-menu-container">
        <img className="mobileImg" src={sailogo} alt="logo" />
        <ul>
          <li>
            <a href="/" className="menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              Skills
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              Experience
            </a>
          </li>
          <li>
            <a href="/" className="menu-item">
              Contact me
            </a>
          </li>
          <button className="contactbtn" onClick={() => {}}>
            Hire me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
