import React from "react";
import GridChild from "../components/GridChild";
import GridChildExternal from "../components/GridChildExternal";
import SocialmediaNav from "../components/SocialMediaNav";
import "../styles/grid.css";
import "../styles/global.css";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Home Page</title>
      </Helmet>
      <div className="intro">
        <h1>Hey I'm Sherzod.👋</h1>
        <p>
          I'm a junior computer science student with a passion for software
          development.
        </p>
      </div>
      <div className="grid">
        <GridChild
          link="projects"
          title="Projects"
          description="Projects I'm proud of"
        />
        <GridChild link="about" title="About" description="About Me" />
        <GridChild
          link="books"
          title="Reading List"
          description="Some books I recommend"
        />
        <GridChild
          link="resume"
          title="Resume"
          description="Professional resume"
        />
        <GridChild
          link="uses"
          title="Uses"
          description="List of software and hardware I use"
        />
        <GridChildExternal title="Puffer Labs" link="https://www.notion.so/Puffer-Labs-Guidelines-218cbc91bbd84597b5e660f0dcadd5fb" description="Puffer Labs documentation page" />
      </div>
      <SocialmediaNav />
    </div>
  );
};

export default Index;
