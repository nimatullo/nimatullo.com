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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚶‍♂️</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro
          header="About"
          text="I am a computer science student from NYC attending Stony Brook University. My interests include backend development, software architecture, basketball and rap music."
        />
        <p>
          <a
            id="mark-link"
            target="_blank"
            rel="noreferrer"
            href="https://markmoawad.com"
          >
            YOU KNOW THE VIBES
          </a>
        </p>
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
