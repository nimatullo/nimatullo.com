import React from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

const GridChild = ({ link, title, description }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="gridChildContainer hover"
      >
        <Link to={`/${link}`}>
          <div>
            <header>
              <h4>{title}</h4>
              <hr />
            </header>
            <p>{description}</p>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default GridChild;
