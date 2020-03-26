import React from "react"
import { Link } from "gatsby"

const Nav = ({ style }) => {
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
          <Link activeClassName="active" to="/books">
            Books
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
