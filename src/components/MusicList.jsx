import React from "react";
import { render } from "react-dom";
import albumList from "../constants/albumsList";
import Music from "../components/Music";

const MusicList = () => {
  return (
    <div className="bookList">
      {albumList.map((album) => (
        <Music album={album} />
      ))}
    </div>
  );
};

export default MusicList;
