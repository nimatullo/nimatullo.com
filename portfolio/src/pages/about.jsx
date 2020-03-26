import React from "react"
import Nav from "../components/Nav"
import SocialMediaNav from "../components/SocialMediaNav"

const About = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="intro">
          <h2>About</h2>
          <p>I am a computer science student from NYC.</p>
        </div>
      </div>
      <SocialMediaNav />
    </>
  )
}

export default About
