import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Emoji } from "./Emoji"

const routes = [
  {
    text: 'Home',
    url: '/',
    emojiName: 'house',
    fallback: '🏡'
  },
  {
    text: 'About',
    url: '/about',
    emojiName: 'man-raising-hand',
    fallback: '🙋‍♂️'
  },
  {
    text: 'Projects',
    url: '/projects',
    emojiName: 'rocket',
    fallback: '🚀'
  },
  {
    text: 'Culture',
    url: '/culture',
    emojiName: 'palette',
    fallback: '🎨'
  },
  {
    text: 'Resume',
    url: '/resume',
    emojiName: 'pen',
    fallback: '🖊️'
  }
]

const Nav = () => {
  const [width, setWidth] = useState(null);
  const widthBreakpoint = 768

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <nav>
      <ul>
        {routes.map((r) => (
          <Link activeClassName="active" to={r.url}>
            {width > widthBreakpoint ? <Emoji style={{ "width": "15px" }} name={r.emojiName} fallback={r.fallback} /> : null}
            {r.text}
          </Link>
        ))}
      </ul>
    </nav>
  )
};

export default Nav;
