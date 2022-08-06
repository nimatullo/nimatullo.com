import React from "react";

const TitledList = ({ title, entries }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </>
  );
};

export default TitledList;
