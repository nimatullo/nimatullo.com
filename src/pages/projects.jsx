import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import "../styles/projects.css";
import Nav from "../components/Nav";
import SocialmediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";

const Projects = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro
          header="Projects"
          text="Here are a list of some projects that I'm proud of. Most of these are open source so feel free to modify and extend as you please!"
        />
        <small className="tip">
          Due to Heroku's decision to{" "}
          <a
            className="link-fat"
            href="https://blog.heroku.com/next-chapter"
            rel="noopener noreferrer"
            target="_blank"
          >
            no longer support free dynos
          </a>
          , some of these projects may be down until I have migrated them to
          another server.
        </small>
        <div className="projectList">
          <ProjectContainer
            project={{
              title: "State Redistricter",
              description:
                "Multi-member district simulation based off H.R.3863",
              github: "https://github.com/nimatullo/state-redistricter",
            }}
          />
          <ProjectContainer
            project={{
              title: "Reminderse",
              description:
                "Reminderse reminds you about the links, articles and other media that you’ve consumed surfing the internet.",
              github: "https://github.com/nimatullo/Reminderse-API",
              link: "https://www.reminderse.com",
            }}
          />
          <ProjectContainer
            project={{
              title: "Parachute",
              description: "Platform independent AirDrop alternative.",
              github: "https://github.com/nimatullo/parachute/",
              link: "https://parachute.nimatullo.com",
            }}
          />
          <ProjectContainer
            project={{
              title: "wyd",
              description:
                "Realtime website status for the about page on nimatullo.com",
              github: "https://github.com/nimatullo/wyd",
              link: "https://nimatullo.com/about",
            }}
          />
          <ProjectContainer
            project={{
              title: "Ghost Kitchen",
              description:
                "Full stack food delivery sample service made with Spring, React, PSQL.",
              github: "https://github.com/nimatullo/GhostKitchen",
              link: "https://youtu.be/wSX2Ocldlho",
            }}
          />
          <ProjectContainer
            project={{
              title: "Prodicter",
              description:
                "Machine Learning model using Linear Regression, Random Forest Regression, and Gradient Boosting Regression in order to predict and rank the current NBA season’s Most Valuable Player",
              github: "https://github.com/nimatullo/CEWIT-Hackathon-Project",
              link:
                "https://devpost.com/software/prodict-machine-learning-mvp-prediction",
            }}
          />
        </div>
      </div>
      <SocialmediaNav />
    </>
  );
};

export default Projects;
