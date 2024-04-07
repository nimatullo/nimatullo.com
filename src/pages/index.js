import React from "react"
import { Helmet } from "react-helmet"
import { Blob } from "../components/Blob"
import Grid from "../components/Grid"
import PageIntro from "../components/PageIntro"
import SocialmediaNav from "../components/SocialMediaNav"
import favicon from "../images/favicon.png"
import "../styles/global.css"

const Index = () => {
  const [hoverTitle, setHoverTitle] = React.useState(null)

  const blobCount = 3

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="blob-text">
        {hoverTitle ? hoverTitle.toLowerCase() : "why worry"}
      </div>
      <PageIntro
        header=""
        text={""}
        emoji={{ name: "anxiety", fallback: "🧦" }}
      />
      {Array(blobCount)
        .fill(0)
        .map((k) => (
          <Blob />
        ))}
      <Grid setHoverTitle={setHoverTitle} />
      <SocialmediaNav />
    </div>
  )
}

export default Index
