import React from "react"
import Nav from "../components/Nav"
import "../styles/gear.css"
import SocialMediaNav from "../components/SocialMediaNav"

const Uses = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="intro">
          <h2>Uses</h2>
          <p>Software and hardware that I use for development.</p>
        </div>
        <div className="gearList">
          <h2>Software</h2>
          <div className="software">
            <h4>Editors</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>IntelliJ</li>
              <li>Vim</li>
            </ul>
            <h4>Design</h4>
            <ul>
              <li>Sketch</li>
              <li>Photoshop</li>
            </ul>
            <h4>Utils</h4>
            <ul>
              <li>iTerm2 w/ Oh My Zsh</li>
              <li>Postman</li>
            </ul>
          </div>
          <h2>Hardware</h2>
          <div className="hardware">
            <h3>Monitor</h3>
            <ul>
              <li>Dell - S2719DGF 27"</li>
            </ul>
            <h3>MacBook Pro 2018 15"</h3>
            <ul>
              <li>2.2 GHz 6-core Intel Core i7</li>
              <li>16 GB 2400 MHz DDR4</li>
              <li>Radeon Pro 555x 4GB</li>
            </ul>
            <h3>Keyboard</h3>
            <ul>
              <li>Magic Keyboard 2</li>
            </ul>
            <h3>Mouse</h3>
            <ul>
              <li>MX Master 2S</li>
            </ul>
            <h3>Headphones</h3>
            <ul>
              <li>Bose 700</li>
              <li>Airpods</li>
            </ul>
          </div>
        </div>
      </div>
      <SocialMediaNav />
    </>
  )
}

export default Uses
