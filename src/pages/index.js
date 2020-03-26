import React from "react";
import GridChild from "../components/GridChild";
import SocialmediaNav from "../components/SocialMediaNav";
import "../styles/grid.css";
import "../styles/global.css";

const Index = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1>Hey I'm Sherzod.👋</h1>
        <p>
          I'm a sophomore computer science student with a passion for software
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
          description="List of software and hardware that aids I use"
        />
        <GridChild title="TBD" description="TBD" />
      </div>
      <SocialmediaNav />
    </div>
  );
};

export default Index;
