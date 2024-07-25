import React from "react"
import { Helmet } from "react-helmet"
import { Blob } from "../components/Blob"
import { Emoji } from "../components/Emoji"
import Grid from "../components/Grid"
import SocialmediaNav from "../components/SocialMediaNav"
import favicon from "../images/favicon.png"
import "../styles/global.css"
import { debounce } from "../util/debounce"

const anxietyStyle = {
  zIndex: -2,
  position: "absolute",
  right: 0,
  mixBlendMode: "darken",
  overflow: "hidden",
}

const fallStyle = {
  zIndex: -2,
  position: "absolute",
  top: 0,
  left: "-15%",
  height: "100dvh",
  mixBlendMode: "multiply",
  overflow: "hidden",
}

const Index = () => {
  const [hoverTitle, setHoverTitle] = React.useState(null)
  const blobCount = 2
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // debounced hover title
  const debouncedSetHoverTitle = React.useCallback(
    debounce(setHoverTitle, 200),
    []
  )

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
        {!isMobile &&
          Array(blobCount)
            .fill(0)
            .map((_) => <Blob />)}
        <Grid setHoverTitle={debouncedSetHoverTitle} />
        <SocialmediaNav setHoverTitle={setHoverTitle} />
      </div>
    </div>
  )
}

export default Index
