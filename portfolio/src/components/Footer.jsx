import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <h2>Vijay</h2>
      </div>
      <div className="mainDiv">
        <ul>
          <li>About Me</li>
          <li>Contact Me</li>
        </ul>
      </div>
      <div className="logosDiv">
        <a href="https://github.com/VijayJsDev">
          {" "}
          <FaSquareGithub />
        </a>
        <a href="https://www.facebook.com/mass.v.sfc?mibextid=AQCFcj8imgClWYJ5">
          <FaFacebook />
        </a>
        <a href="linkedin.com/in/vijay-b-developer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
