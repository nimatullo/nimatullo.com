import React from "react";
import "../styles/socialmedianav.css";
import { Instagram, Twitter, GitHub, Music, Mail } from "react-feather";

const SocialmediaNav = () => {
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
            href="https://music.apple.com/profile/mmvvpp123"
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
    </footer>
  );
};

export default SocialmediaNav;
