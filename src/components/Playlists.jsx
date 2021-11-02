import React from "react";
import PlaylistEntry from "./PlaylistEntry";

const Playlist = () => {
  return (
    <>
      <PlaylistEntry
        title="2:00 AM"
        source="https://embed.music.apple.com/us/playlist/2-00-am/pl.u-2aoq8meSezzjL2"
      />
      <PlaylistEntry
        title="Consensual Seduction"
        source="https://embed.music.apple.com/us/playlist/consensual-seduction/pl.u-jV890pJu3ooPqB"
      />
      <PlaylistEntry
        title="new friends"
        source="https://embed.music.apple.com/us/playlist/summer-21/pl.u-KVXBD71Idoopm0"
      />
      <PlaylistEntry
        title="Kaleidoscopic"
        source="https://embed.music.apple.com/us/playlist/soft-porn/pl.u-xlyNqrlteKKZpv"
      />
      <PlaylistEntry
        title="fall 21"
        source="https://embed.music.apple.com/us/playlist/fall-21/pl.u-8aAVXEeIr77EaJ"
      />
    </>
  );
};

export default Playlist;
