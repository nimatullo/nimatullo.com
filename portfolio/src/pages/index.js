import React from "react"
import { Link } from "gatsby"
import GridChild from "../components/GridChild"
import SocialmediaNav from "../components/SocialMediaNav"
import "../styles/grid.css"
import "../styles/global.css"

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
        <GridChild title="Projects" description="Checkout my projects" />
        <GridChild title="About" description="About Me" />
        <GridChild title="Reading List" description="Some books I recommend" />
        <GridChild title="Resume" description="My Resume" />
        <GridChild title="Uses" description="What I use for development" />
        <GridChild title="TBD" description="TBD" />
      </div>
      <SocialmediaNav />
    </div>
  )
}

export default Index
