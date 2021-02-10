import React from "react";
import Nav from "../components/Nav";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | About Me</title>
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro
          header="About"
          text="I am a computer science student from NYC attending Stony Brook University. My interests include backend development, software architecture, basketball and rap music."
        />
        <small>
          The design for this website was highly inspired by{" "}
          <a
            style={{ textDecoration: "underline" }}
            id="creditLink"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/dhanishgajjar/"
          >
            Dhanish Gajjar.
          </a>
        </small>
      </div>
      <SocialMediaNav />
    </>
  );
};

export default About;
