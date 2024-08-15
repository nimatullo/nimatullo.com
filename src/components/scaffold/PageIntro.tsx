import { randomMinMax } from "@app/utils"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

const PageIntroContainer = styled.div({
  margin: "50px 0",
  h1: {
    fontSize: "calc(2rem + 2vw)",
    fontFamily: "DM Serif Text, serif",
    letterSpacing: `${randomMinMax(-5, 5)}px`,
  },
})

interface PageIntroProps {
  header: string
  text: React.ReactNode
}
export const PageIntro: React.FC<PageIntroProps> = (props) => {
  const { header, text } = props
  return (
    <PageIntroContainer>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {header}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.1 }}
      >
        {text}
      </motion.div>
    </PageIntroContainer>
  )
}
