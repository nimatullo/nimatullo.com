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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⌨️</text></svg>"
        />
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
              entries={["iTerm2 w/ Oh My Zsh", "Postman", "TablePlus"]}
            />
            <TitledList title="Notetaking" entries={["Notion", "FSNotes"]} />
          </div>
        </div>
      </div>
      <SocialMediaNav />
    </>
  );
};

export default Uses;
