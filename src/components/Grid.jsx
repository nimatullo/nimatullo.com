import React from "react";
import GridChild from "../components/GridChild";
import GridChildExternal from "../components/GridChildExternal";

const Grid = () => {
  return (
    <div className="grid">
      <GridChild
        link="projects"
        title="👨‍💻 Projects"
        description="Projects I'm proud of"
      />
      <GridChild link="about" title="🚶‍♂️ About" description="About Me" />
      <GridChild
        link="culture"
        title="📚 Culture"
        description="List of books and music I listen to"
      />
      <GridChild
        link="resume"
        title="📄 Resume"
        description="Professional resume"
      />
      <GridChild
        link="uses"
        title="⌨️ Uses"
        description="List of software and hardware I use"
      />
      <GridChildExternal title="🤡 Meme" description="Bad programmer memes" />
    </div>
  );
};

export default Grid;
