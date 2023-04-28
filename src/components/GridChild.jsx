import React from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { Emoji } from "./Emoji";

export const flexStyle = {
  'display': 'flex',
  'flex-direction': 'row',
  'justify-content': 'start'
}

const GridChild = ({ link, title, description, emoji }) => {

  const { name: emojiName, fallback } = emoji


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
              <div style={flexStyle}>
                <Emoji name={emojiName} fallback={fallback} />
                <h4>{title}</h4>
              </div>
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
