import React from "react"
import { Helmet } from "react-helmet"
import Grid from "../components/Grid"
import PageIntro from "../components/PageIntro"
import SocialmediaNav from "../components/SocialMediaNav"
import favicon from "../images/favicon.png"
import "../styles/global.css"

const Index = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <PageIntro
        header="why worry"
        text={""}
        emoji={{ name: "anxiety", fallback: "🧦" }}
      />
      <Grid />
      <SocialmediaNav />
    </div>
  )
}

export default Index
