import React from "react"
import Helmet from "react-helmet"
import Nav from "../components/Nav"
import PageIntro from "../components/PageIntro"
import ProjectContainer from "../components/ProjectContainer"
import SocialmediaNav from "../components/SocialMediaNav"
import "../styles/projects.css"

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
              description: "Mm..Food",
              github: "https://github.com/nimatullo/GhostKitchen",
              link: "https://youtu.be/wSX2Ocldlho",
            }}
          />
          <ProjectContainer
            project={{
              title: "Prodicter",
              description: "MVP!MVP!MMVVPP123!",
              github: "https://github.com/nimatullo/CEWIT-Hackathon-Project",
              link:
                "https://devpost.com/software/prodict-machine-learning-mvp-prediction",
            }}
          />
        </div>
      </div>
      <SocialmediaNav />
    </>
  )
}

export default Projects
