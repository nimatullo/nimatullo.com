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
<iframe src="https://docs.google.com/document/d/e/2PACX-1vRDzcwPM-Y_fKcKVpa8GWa1AxZj0x-PMEzxbhJcP5a9LoWWAKrAnBG1vDbVm_jl6QvVJETLXewsUmuD/pub?embedded=true"></iframe>
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Resume;
