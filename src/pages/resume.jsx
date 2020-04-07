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
      </Helmet>
      <Nav />
      <div className="intro">
        <h2>Resume</h2>
        <p>My resume</p>
      </div>
      <div className="resumeContent">
        <iframe
          src="https://drive.google.com/file/d/1V18tmOdV0rIoRmm9kPyah1CLh760kxem/preview"
          width="1000px"
          height="1100px"
        />
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Resume;
