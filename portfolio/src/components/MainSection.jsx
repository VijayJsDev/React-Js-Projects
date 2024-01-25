import React from "react";
import "./MainSection.css";

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
            <button className="button1">Download My CV/Resume</button>
            <button className="button2">See My Projects On Github</button>
          </div>
        </div>
        <div className="image">
            <img src="" alt="vijay's picuture"></img>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
