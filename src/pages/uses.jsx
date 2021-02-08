import React from "react";
import Nav from "../components/Nav";
import "../styles/gear.css";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";

const Uses = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Uses</title>
      </Helmet>
      <Nav />
      <div className="container">
        <div className="intro">
          <h2>Uses</h2>
          <p>Software that I use for development.</p>
        </div>
        <div className="gearList">
          <div className="software">
            <h4>Editors</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>IntelliJ</li>
              <li>Vim</li>
            </ul>
            <h4>Design</h4>
            <ul>
              <li>Sketch</li>
              <li>Photoshop</li>
            </ul>
            <h4>Utils</h4>
            <ul>
              <li>iTerm2 w/ Oh My Zsh</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <SocialMediaNav />
    </>
  );
};

export default Uses;
