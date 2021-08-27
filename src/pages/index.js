import React from "react";
import SocialmediaNav from "../components/SocialMediaNav";
import "../styles/grid.css";
import "../styles/global.css";
import { Helmet } from "react-helmet";
import Grid from "../components/Grid";
import PageIntro from "../components/PageIntro";

const Index = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Home Page</title>
      </Helmet>
      <PageIntro
        header="Hey I'm Sherzod.👋"
        text={
          "I'm a senior computer science student with a passion for software development."
        }
      />
      <Grid />
      <SocialmediaNav />
    </div>
  );
};

export default Index;
