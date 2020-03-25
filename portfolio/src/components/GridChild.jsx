import React from "react"

const GridChild = ({ title, description }) => {
  const handleClick = () => {
    console.log("take ot different page")
  }
  return (
    <a href={`/${title}`} className="gridChildContainer">
      <div>
        <header>
          <h4>{title}</h4>
          <hr />
        </header>
        <p>{description}</p>
      </div>
    </a>
  )
}

export default GridChild
