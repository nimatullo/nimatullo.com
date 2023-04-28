import React from "react";
import GridChild from "../components/GridChild";
import GridChildExternal from "../components/GridChildExternal";

const Grid = () => {
  return (
    <div className="grid">
      <GridChild
        link="projects"
        title="Projects"
        description="Projects I've done so far, all open source"
        emoji={{
          name: 'rocket',
          fallback: '🚀'
        }}
      />
      <GridChild
        link="culture"
        title="Culture"
        emoji={{
          name: 'palette',
          fallback: '🎨'
        }}
        description="Some of my favorite books, my playlists and articles/blogs everyone should read"
      />
      <GridChild
        link="resume"
        title="Resume"
        emoji={{
          name: 'pen',
          fallback: '🖊️'
        }}
        description="Professional resume"
      />
      <GridChildExternal
        title="Memes"
        emoji={{
          name: 'clown',
          fallback: '🤡'
        }}
        description="Rotating carousel of bad programmer memes"
      />
    </div>
  );
};

export default Grid;
