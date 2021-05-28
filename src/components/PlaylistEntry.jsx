import React, { useState } from "react";
import "../styles/playlists.css";

const PlaylistEntry = (props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="playlist-container">
      <h3 class="playlist-title" onClick={() => setVisible(!isVisible)}>
        {props.title}
      </h3>
      {isVisible ? (
        <>
          <div className="playlist">
            <iframe src={props.source} height="500px" width="700px"></iframe>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PlaylistEntry;
