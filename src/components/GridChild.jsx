import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const GridChild = ({ link, title, description }) => {
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
  );
};

export default GridChild;
