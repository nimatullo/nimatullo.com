import React from "react"
import { GridChild } from "../components/GridChild"
import "../styles/grid.css"

const Grid = () => {
  return (
    <div className="grid">
      <GridChild
        link="projects"
        title="Projects"
        description="things i make"
        emoji={{
          name: "clipartrocket",
          fallback: "🚀",
        }}
      />
      <GridChild
        link="culture"
        title="Culture"
        emoji={{
          name: "artist",
          fallback: "🎨",
        }}
        description="books, music, reading"
      />
      <GridChild
        link="resume"
        title="Resume"
        emoji={{
          name: "business",
          fallback: "🖊️",
        }}
        description="make sure you look them in their eyes when you shake their hand"
      />
      <GridChild
        external
        title="Memes"
        emoji={{
          name: "clownonball",
          fallback: "🤡",
        }}
        description="**bad**"
      />
    </div>
  )
}

export default Grid
