import React from "react";
import SocialmediaNav from "../components/SocialMediaNav";
import "../styles/grid.css";
import "../styles/global.css";
import { Helmet } from "react-helmet";
import Grid from "../components/Grid";
import PageIntro from "../components/PageIntro";
import favicon from "../images/favicon.png";

const Index = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <PageIntro header="why worry" text={""} emoji={{ name: 'socks', fallback: '🧦' }} />
      <Grid />
      <SocialmediaNav />
    </div>
  );
};

export default Index;
