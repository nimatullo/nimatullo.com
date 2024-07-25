import React from "react"
import { GridChild } from "../components/GridChild"
import "../styles/grid.css"

const Grid = ({ setHoverTitle }) => {
  return (
    <div className="grid">
      <GridChild
        onHover={setHoverTitle}
        link="projects"
        title="Projects"
        description="things i make"
        emoji={{
          name: "clipartrocket",
          fallback: "🚀",
        }}
      />
      <GridChild
        onHover={setHoverTitle}
        link="media"
        title="media"
        emoji={{
          name: "artist",
          fallback: "🎨",
        }}
        description="books, music, reading"
      />
      <GridChild
        onHover={setHoverTitle}
        link="resume"
        title="Resume"
        emoji={{
          name: "business",
          fallback: "🖊️",
        }}
        description="make sure you look them in their eyes when you shake their hand"
      />
      <GridChild
        onHover={setHoverTitle}
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
