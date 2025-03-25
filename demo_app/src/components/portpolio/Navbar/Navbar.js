import React, { useState } from "react";
import "./navbar.css";
import logo1 from "../../assests/images/logo1.png";
import sailogo from "../../assests/images/sailogo2.jpg";
import { IoIosMenu } from "react-icons/io";
import { Navbar } from "react-bootstrap";
import MobileNavbar from "../MobileNav/MobileNavbar";
import { IoClose } from "react-icons/io5";
const NavbarH = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const toggleMenu = () => setOpenmenu(!openmenu);
  return (
    <>
      {<MobileNavbar isOpen={openmenu} togglemenu={toggleMenu} />}
      <nav className="nav-wraapper">
        <div className="nav-content">
          <img className="img" src={sailogo} alt="logo" />
          <ul>
            <li>
              <a href="/hero" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="/skills" className="menu-item">
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openmenu ? <IoClose /> : <IoIosMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarH;
