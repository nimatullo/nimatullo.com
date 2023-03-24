import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const GridChildExternal = ({ title, description }) => {
  const [memeLink, setMemeLink] = useState(0);
  const [memeIndex, setIndex] = useState(0);
  const listOfMemes = [
    "https://preview.redd.it/c19x85xw7nl61.png?width=640&height=748&crop=smart&auto=webp&s=aef8ea8879e38bf98b721a3ff8bb8305dc8ff2af",
    "https://i.imgur.com/ijhBu3H.png",
    "https://i.imgur.com/RYmZSao.png",
    "https://i.imgur.com/FoamaYm.png",
    "https://i.imgur.com/4BMb9RY.png",
    "https://i.imgur.com/L75Dcvr.png",
    "https://i.imgur.com/IOu8cMH.jpg",
    "https://i.imgur.com/ZoUIp2U.png",
    "https://i.imgur.com/KAxRiuD.jpg",
    "https://i.imgur.com/Nz8FuGC.png",
    "https://i.imgur.com/SsAKh1L.jpg",
    "https://i.imgur.com/qSkfhO1.jpg",
    "https://i.imgur.com/hQBbiSt.png",
    "https://i.imgur.com/QpMRSrx.png",
    "https://i.imgur.com/jLXveVw.jpg",
    "https://i.imgur.com/Oc6jnzP.png",
    "https://i.imgur.com/M6ud0QY.png",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Are-you-a-robot-Meme-1024x925.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Mark-Zuckerberg-Meme-878x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-Meme-1024x954.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Memes-End-Game-1024x835.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Google-Joke-1024x956.jpg",
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="gridChildContainer hover"
      >
        <a
          rel="noopener noreferrer"
          onClick={() => {
            memeIndex === listOfMemes.length - 1
              ? setIndex(0)
              : setIndex(memeIndex + 1);
            setMemeLink(listOfMemes[memeIndex]);
          }}
          target="_blank"
          href={memeLink}
        >
          <div>
            <header>
              <h4>{title}</h4>
              <hr />
            </header>
            <p>{description}</p>
          </div>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default GridChildExternal;
