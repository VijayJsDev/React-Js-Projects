import React, { useState } from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navContents">
        <h1 className="h1Name">Vijay</h1>
        <div className="menuBar" onClick={toggleMenu}>
          <IoMenu />
        </div>
        <ul className={`list ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
