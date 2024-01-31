import React from "react";
import "./MainSection.css";
import Resume from "./utils/Vijay-CV-31.01.pdf";
import MyImg from "./utils/myPic.jpg";

function MainSection() {
  return (
    <section className="section">
      <div className="sectionContainer">
        <div className="content">
          <p className="subtitle">Hello</p>
          <h1 className="title">
            I'm{" "}
            <span>
              Vijay
              <br />
            </span>
            Web Developer
          </h1>
          <p className="description">
            "Passionate about the MERN stack, fueled by the art of JavaScript,
            building the future of full-stack applications! #JavaScriptDeveloper
          </p>
          <div className="actionButtons">
            <button className="button1" ><a href={Resume} download style={{textDecoration:"none"}}>Download My CV/Resume</a></button>
            <button className="button2"><a href="https://github.com/VijayJsDev?tab=repositories" style={{textDecoration:"none"}}>See My Projects On Github</a></button>
          </div>
        </div>
        <div className="image">
            <img src={MyImg} alt="vijay's picuture"></img>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
