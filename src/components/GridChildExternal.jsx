import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const GridChildExternal = ({ title, description }) => {
  const [memeLink, setMemeLink] = useState(0);
  const listOfMemes = [
    "https://i.imgur.com/4BMb9RY.png",
    "https://i.imgur.com/L75Dcvr.png",
    "https://i.imgur.com/IOu8cMH.jpg",
    "https://i.imgur.com/ZoUIp2U.png",
    "https://i.imgur.com/KAxRiuD.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Are-you-a-robot-Meme-1024x925.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Mark-Zuckerberg-Meme-878x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-Meme-1024x954.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Memes-End-Game-1024x835.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Google-Joke-1024x956.jpg",
  ];

  useEffect(() => {
    setMemeLink(listOfMemes[Math.floor(Math.random() * listOfMemes.lengtH)]);
  }, []);

  return (
    <Link target="_blank" to={memeLink} className="gridChildContainer hover">
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

export default GridChildExternal;
