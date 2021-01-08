import React from "react"
import { Link } from "gatsby"

const GridChildExternal = ({ link, title, description }) => {
  return (
    <Link to={link} className="gridChildContainer hover">
      <div>
        <header>
          <h4>{title}</h4>
          <hr />
        </header>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default GridChildExternal
