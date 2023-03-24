import React from "react";
import { motion } from "framer-motion";
const PageIntro = (props) => {
  return (
    <motion.div className="intro">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {props.header}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        {props.text}
      </motion.p>
    </motion.div>
  );
};

export default PageIntro;
