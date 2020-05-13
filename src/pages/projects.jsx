import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import "../styles/projects.css";
import Nav from "../components/Nav";
import SocialmediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Projects</title>
      </Helmet>
      <Nav />
      <div className="container">
        <div className="intro">
          <h2>Projects</h2>
          <p>
            Here are a list of some projects that I'm proud of. Most of these
            are open source so feel free to modify and extend as you please!
          </p>
        </div>
        <div className="projectList">
          <ProjectContainer
            project={{
              title: "Reminderse",
              description:
                "Reminderse reminds you about the links, articles and other media that you’ve consumed surfing the internet.",
              link: "https://reminderse.com",
            }}
          />
          <ProjectContainer
            project={{
              title: "Typer",
              description: "JavaFX built Text Editor",
              github: "https://github.com/nimatullo/Typer",
            }}
          />
          <ProjectContainer
            project={{
              title: "Prodicter",
              description:
                "Machine Learning model using Linear Regression, Random Forest Regression, and Gradient Boosting Regression in order to predict and rank the current NBA season’s Most Valuable Player",
              github: "https://github.com/nimatullo/CEWIT-Hackathon-Project",
              link: "https://mvp-prediction.appspot.com/",
            }}
          />
          <ProjectContainer
            project={{
              title: "Ghost Kitchen",
              description:
                "Full stack food delivery website made using Spring, React, PSQL.",
              github: "https://github.com/nimatullo/GhostKitchen",
              link: "https://ghostkitchen.site/",
            }}
          />
        </div>
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Projects;
