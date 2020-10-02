import React from "react";
import Nav from "../components/Nav";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | About Me</title>
      </Helmet>
      <Nav />
      <div className="container">
        <div className="intro">
          <h2>About</h2>
          <p>I am a computer science student from NYC.</p>
          <p>
            The design for this website was highly inspired by{" "}
            <a
              style={{ textDecoration: "underline" }}
              id="creditLink"
              target="_blank"
              href="https://www.instagram.com/dhanishgajjar/"
            >
              Dhanish Gajjar.
            </a>
          </p>
        </div>
      </div>
      <SocialMediaNav />
    </>
  );
};

export default About;
