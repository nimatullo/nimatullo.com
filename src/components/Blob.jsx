import { motion } from "framer-motion"
import React from "react"
import { random, randomHSLColor } from "../util/number"

export const Blob = () => {
  const animation = React.useMemo(
    () => ({
      layout: true,
      animate: {
        rotate: [
          ...Array(2)
            .fill(0)
            .map((_) => random(360)),
        ],
        x: [
          ...Array(2)
            .fill(0)
            .map((k) => random(window.innerWidth)),
        ],
        y: [
          ...Array(2)
            .fill(0)
            .map((k) => random(window.innerHeight)),
        ],

        borderRadius: [
          "24% 76% 35% 65% / 27% 36% 64% 73%",
          "76% 24% 33% 67% / 68% 55% 46% 32%",
        ],
      },
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
      },
    }),
    []
  )

  const style = React.useMemo(
    () => ({
      position: "absolute",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      zIndex: -1,
      width: 700,
      height: 700,
      background: `linear-gradient(180deg, ${randomHSLColor(
        0.4
      )} 31.77%, ${randomHSLColor(0.4)} 100%)`,
    }),
    []
  )

  return <motion.div {...animation} style={style} />
}
