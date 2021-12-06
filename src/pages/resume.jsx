import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import SocialmediaNav from "../components/SocialMediaNav";

const Resume = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Resume</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👔</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="intro">
        <h2>Resume</h2>
        <p>My resume</p>
      </div>
      <div className="resumeContent">
        <iframe
          title="drive-iframe"
          src="https://drive.google.com/file/d/152HlS9JmUuvlgxj5ZYqIBb1d3_pFLNYN/preview"
          width="1000px"
          height="1100px"
        />
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Resume;
