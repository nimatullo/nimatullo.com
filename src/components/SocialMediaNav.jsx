import React from "react";
import "../styles/socialmedianav.css";
import { Instagram, Twitter, GitHub, Music, Film, Mail } from "react-feather";

const SocialmediaNav = () => {
  const [commit, setCommit] = React.useState("");

  React.useEffect(() => {
    const ghApiUrl =
      "https://api.github.com/repos/nimatullo/nimatullo.com/commits";
    fetch(ghApiUrl)
      .then((res) => res.json())
      .then((json) => setCommit(json[0].sha));
  }, []);
  return (
    <footer>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/nimatullo"
            title="Github"
          >
            <GitHub size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.apple.com/profile/nimatullo"
            title="Apple Music"
          >
            <Music size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://letterboxd.com/nimatullo/"
            title="Letterboxd"
          >
            <Film size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sherzod@nimatullo.com"
            title="Email"
          >
            <Mail size="2em" color="#1c1c1c" />
          </a>
        </li>
      </ul>
      <a target="_blank" rel="noreferrer" href="https://josh8.com">
        Stay Connected
      </a>
      <div className="current-build">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/nimatullo/nimatullo.com/commit/${commit}`}
        >
          {commit.substring(0, 7)}
        </a>
      </div>
    </footer>
  );
};

export default SocialmediaNav;
