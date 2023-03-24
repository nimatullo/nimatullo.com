import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "../styles/playlists.css";

const playlistOpenVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const PlaylistEntry = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isVisible, setVisible] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="playlist-container hover"
    >
      <div
        className="playlist-title"
        onClick={() => {
          if (isVisible) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }}
      >
        <h3>{props.title}</h3>
        <h3 style={{ textAlign: "right" }}>{isVisible ? "-" : "+"}</h3>
      </div>
      <AnimatePresence>
        {isVisible ? (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={playlistOpenVariants}
              className="playlist"
            >
              <iframe
                className="playlist-frame"
                allow="autoplay *; encrypted-media *;"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={props.source}
              ></iframe>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlaylistEntry;
