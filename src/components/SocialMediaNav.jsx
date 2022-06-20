import React from "react";
import "../styles/socialmedianav.css";
import { Instagram, Twitter, GitHub, Music, Mail } from "react-feather";

const SocialmediaNav = () => {
  const [commit, setCommit] = React.useState("");

  React.useEffect(() => {
    const ghApiUrl = "https://api.github.com/repos/nimatullo/nimatullo.com/commits";
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
            href="https://instagram.com/sherzodnimatullo"
          >
            <Instagram size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://twitter.com/mmvvpp123"
          >
            <Twitter size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/nimatullo"
          >
            <GitHub size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.apple.com/profile/nimatullo"
          >
            <Music size="2em" color="#1c1c1c" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sherzodnimatullo@gmail.com"
          >
            <Mail size="2em" color="#1c1c1c" />
          </a>
        </li>
      </ul>
      <a target="_blank" rel="noreferrer" href="https://josh8.com">
        Stay Connected
      </a>
      <div className="current-build">
        <a target="_blank" rel="noreferrer" href={`https://github.com/nimatullo/nimatullo.com/commit/${commit}`}>
          {commit.substring(0, 7)}
        </a>
      </div>
    </footer>
  );
};

export default SocialmediaNav;
