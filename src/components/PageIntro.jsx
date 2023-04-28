import React from "react";
import { motion } from "framer-motion";
import { Emoji } from "./Emoji";
const PageIntro = ({header, text, emoji={}}) => {

  return (
    <motion.div className="intro">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {header} {emoji ? (<Emoji name={emoji.name} style={{ "width": "50px" }} fallback={emoji.fallback} />) : null}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default PageIntro;
