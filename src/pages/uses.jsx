import React from "react";
import Nav from "../components/Nav";
import "../styles/gear.css";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";
import TitledList from "../components/TitledList";

const Uses = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Uses</title>
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro header="Uses" text="Software I use for development." />
        <div className="gearList">
          <div className="software">
            <TitledList
              title="Editors"
              entries={["Visual Studio Code", "IntelliJ", "Vim"]}
            />
            <TitledList title="Design" entries={["Sketch", "Photoshop"]} />
            <TitledList
              title="Utils"
              entries={["iTerm2 w/ Oh My Zsh", "Postma", "TablePlus"]}
            />
            <TitledList
              title="Notetaking"
              entries={["Notion", "FSNotes"]}
            />
          </div>
        </div>
      </div>
      <SocialMediaNav />
    </>
  );
};

export default Uses;
