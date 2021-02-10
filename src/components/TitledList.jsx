import React from "react";

const TitledList = ({ title, entries }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {entries.map((entry) => (
          <li>{entry}</li>
        ))}
      </ul>
    </>
  );
};

export default TitledList;
