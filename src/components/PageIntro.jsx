import React from "react";

const PageIntro = (props) => {
    return (
      <div className="intro">
        <h1>{props.header}</h1>
        <p>{props.text}
        </p>
      </div>
    )
};

export default PageIntro;