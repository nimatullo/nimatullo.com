import React, { useState } from "react";
import "../styles/playlists.css";

const PlaylistEntry = (props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="playlist-container">
      <div
        className="playlist-title"
        onClick={() => {
          if (isVisible) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }}
      >
        <h3>{props.title}</h3>
        <h3 style={{ textAlign: "right" }}>{isVisible ? "-" : "+"}</h3>
      </div>
      {isVisible ? (
        <>
          <div className="playlist">
            <iframe
              className="playlist-frame"
              allow="autoplay *; encrypted-media *;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src={props.source}
            ></iframe>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PlaylistEntry;
