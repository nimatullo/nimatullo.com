import React from "react";
import SocialmediaNav from "../components/SocialMediaNav";
import "../styles/grid.css";
import "../styles/global.css";
import { Helmet } from "react-helmet";
import Grid from "../components/Grid";
import PageIntro from "../components/PageIntro";
import favicon from "../images/favicon.png";

import { getLinks } from "../services/firestore";

const Index = () => {
  React.useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => await getLinks();

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Home Page</title>
        <link rel="icon" href={favicon} />
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
