import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const Nav = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  if (width > 768) {
    return (
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" to="/">
              🏡 Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">
              🙋‍♂️ About
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/projects">
              ‍🚀 Projects
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/culture">
              🎨 Culture
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/resume">
              🖊️ Resume
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/uses">
              Uses
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/culture">
              Culture
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
