import baffle from "baffle"
import { motion } from "framer-motion"
import React from "react"
import { Emoji } from "./Emoji"

const PageIntro = ({ header, text, emoji = {}, obscure }) => {
  React.useEffect(() => {
    const target = baffle(".obfuscated")
    target.set({
      characters: "█▓ ▒░",
      speed: 50,
    })
    obscure && target.start()
  }, [])

  return (
    <motion.div className="intro">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {header}{" "}
        {emoji ? (
          <Emoji
            name={emoji.name}
            style={{ width: "50px" }}
            fallback={emoji.fallback}
          />
        ) : null}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        {text}
        {obscure && (
          <span className="obfuscated">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quisquam consequatur corporis possimus odio ipsum assumenda cumque,
          </span>
        )}
      </motion.p>
    </motion.div>
  )
}

export default PageIntro
