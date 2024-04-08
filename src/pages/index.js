import React from "react"
import { Helmet } from "react-helmet"
import { Blob } from "../components/Blob"
import { Emoji } from "../components/Emoji"
import Grid from "../components/Grid"
import SocialmediaNav from "../components/SocialMediaNav"
import favicon from "../images/favicon.png"
import "../styles/global.css"

const anxietyStyle = {
  zIndex: -2,
  position: "absolute",
  right: 0,
  mixBlendMode: "darken",
}

const fallStyle = {
  zIndex: -2,
  position: "absolute",
  top: 0,
  left: "-15%",
  height: "100dvh",
  mixBlendMode: "multiply",
}

const Index = () => {
  const [hoverTitle, setHoverTitle] = React.useState(null)

  const blobCount = 3

  return (
    <div className="blobContainer">
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="icon" href={favicon} />
        </Helmet>
        <div className="blob-text">
          {hoverTitle ? hoverTitle.toLowerCase() : "why worry"}
        </div>
        <Emoji style={anxietyStyle} name="anxiety" fallback="😨" />
        <Emoji style={fallStyle} name="fall" fallback="😨" />
        {Array(blobCount)
          .fill(0)
          .map((k) => (
            <Blob />
          ))}
        <Grid setHoverTitle={setHoverTitle} />
        <SocialmediaNav setHoverTitle={setHoverTitle} />
      </div>
    </div>
  )
}

export default Index
