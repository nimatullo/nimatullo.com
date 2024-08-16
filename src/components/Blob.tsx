import { useMobile } from "@app/hooks"
import { randomHSLColor } from "@app/styles/colors"
import { random, randomMinMax } from "@app/utils"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

const StyledBlob = styled(motion.div)({
  position: "absolute",
  top: 0,
  left: 0,
  border: "1px solid rgba(255, 255, 255, 0.18)",
  zIndex: randomMinMax(-3, -1),
  width: 700,
  height: 700,
  background: `linear-gradient(180deg, ${randomHSLColor()} 31.77%, ${randomHSLColor()} 100%)`,
})

export const Blob = () => {
  const { isMobile } = useMobile()
  const maybeWindow = typeof window !== "undefined" && window
  const animation = React.useMemo(
    () => ({
      layout: true,
      animate: {
        rotate: [
          ...Array(2)
            .fill(0)
            .map((_) => random(360)),
        ],

        x: maybeWindow
          ? [
              random(maybeWindow.innerWidth - 700),
              random(maybeWindow.innerWidth - 700),
            ]
          : 0,
        y: maybeWindow
          ? [
              random(maybeWindow.innerHeight - 700),
              random(maybeWindow.innerHeight - 700),
            ]
          : 0,

        borderRadius: [
          "24% 76% 35% 65% / 27% 36% 64% 73%",
          "76% 24% 33% 67% / 68% 55% 46% 32%",
        ],
      },
    }),
    []
  )

  if (isMobile) return null
  return (
    <StyledBlob
      transition={{
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      }}
      {...animation}
    />
  )
}
