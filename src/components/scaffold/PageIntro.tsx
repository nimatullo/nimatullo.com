import { randomMinMax } from "@app/utils"
import { Spinner } from "@components/scaffold/Spinner"
import styled from "@emotion/styled"
import { motion } from "motion/react"
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
  children: React.ReactNode
  loading?: boolean
}
export const PageIntro: React.FC<PageIntroProps> = (props) => {
  const { header, children, loading = false } = props

  const headerLetters = header.split("")

  return (
    <PageIntroContainer>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {loading
          ? headerLetters.map((letter, index) => (
              <motion.span
                css={{ display: "inline-block", fontFamily: "inherit" }}
                key={index}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {letter}
              </motion.span>
            ))
          : header}
      </motion.h1>
      {loading ? (
        <Spinner />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </PageIntroContainer>
  )
}
