import React from "react"
import { Link } from "gatsby"

const GridChild = ({ link, title, description }) => {
  const handleClick = () => {
    console.log("take ot different page")
  }
  return (
    <Link to={`/${link}`} className="gridChildContainer hover">
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

export default GridChild
