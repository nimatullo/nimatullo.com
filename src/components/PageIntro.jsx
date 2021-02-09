import React from "react";

const PageIntro = ({header, text}) => {
    return (
      <div className="intro">
        <h1>{header}</h1>
        <p>{text}
        </p>
      </div>
    )
};

export default PageIntro;