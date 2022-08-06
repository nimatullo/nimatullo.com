import React from "react";
import GridChild from "../components/GridChild";
import GridChildExternal from "../components/GridChildExternal";

const Grid = () => {
  return (
    <div className="grid">
      <GridChild
        link="projects"
        title="‍🚀 Projects"
        description="Projects I've done so far, all open source"
      />
      <GridChild link="about" title="🚶‍♂️ About" description="A little about me, what I'm doing and the current website I'm on" />
      <GridChild
        link="culture"
        title="🎨 Culture"
        description="Some of my favorite books, my playlists and articles/blogs everyone should read"
      />
      <GridChild
        link="resume"
        title="🖊️ Resume"
        description="Professional resume"
      />
      <GridChild
        link="uses"
        title="⌨️ Uses"
        description="Some of the software that I use that makes me productive"
      />
      <GridChildExternal title="🤡 Memes" description="Rotating carousel of bad programmer memes" />
    </div>
  );
};

export default Grid;
