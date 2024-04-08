import { AnimatePresence, motion } from "framer-motion"
import { navigate } from "gatsby"
import React from "react"
import { Emoji } from "./Emoji"

export const GridChild = ({
  link,
  title,
  description,
  emoji,
  external,
  onHover,
}) => {
  const flexStyle = {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "start",
  }
  const variants = {
    initial: { scale: 1 },
    zoomIn: {
      scale: 100,
      transition: { duration: 0.3 },
    },
  }
  const [memeIndex, setIndex] = React.useState(0)
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
  ]
  const [memeLink, setMemeLink] = React.useState(listOfMemes[0])
  const [isZoomed, setZoom] = React.useState(false)
  const { name: emojiName, fallback } = emoji
  const clickHandler = () => {
    setZoom(!isZoomed)
    if (!external) setTimeout(() => navigate(link), 100)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="gridChildContainer hover glass"
        onClick={clickHandler}
        onMouseEnter={() => onHover(title)}
        onMouseLeave={() => onHover(null)}
        variants={variants}
        initial="initial"
        animate={isZoomed ? "zoomIn" : "initial"}
        whileTap={{ scale: 0.9 }}
      >
        {external ? (
          <a
            rel="noopener noreferrer"
            onClick={() => {
              setIndex(memeIndex + 1)
              setMemeLink(listOfMemes[memeIndex % listOfMemes.length])
            }}
            target="_blank"
            href={memeLink}
          >
            <div>
              <header>
                <div style={flexStyle}>
                  <Emoji name={emojiName} fallback={fallback} />
                  <h4
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    {title}
                  </h4>
                </div>
                <hr />
              </header>
              <p>{description}</p>
            </div>
          </a>
        ) : (
          <div>
            <header>
              <div style={flexStyle}>
                <Emoji name={emoji.name} fallback={emoji.fallback} />
                <h4
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  {title}
                </h4>
              </div>
              <hr />
            </header>
            <p>{description}</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
