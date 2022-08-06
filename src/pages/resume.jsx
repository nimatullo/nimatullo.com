import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import SocialmediaNav from "../components/SocialMediaNav";

const Resume = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume / Sherzod Nimatullo</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖊️</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="intro">
        <h2>Resume</h2>
        <p>My resume</p>
      </div>
      <div className="resumeContent">
        <iframe
          style={{
            border: "1px solid #1f1f1f",
          }}
          title="drive-iframe"
          src="https://drive.google.com/file/d/1juKsYxZWSQTReM11tkmUWMu13fVtvZzK/preview"
          width="1000px"
          height="1100px"
        />
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Resume;
