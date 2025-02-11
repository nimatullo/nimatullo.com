import { getBorderedContainerStyle } from "@app/styles/css"
import styled from "@emotion/styled"
import { AnimatePresence, motion, useInView } from "framer-motion"
import React from "react"

interface AccordionProps {
  title: string
  children: React.ReactNode
}

const AccordionWrapper = styled(motion.div)((props) => ({
  ...getBorderedContainerStyle(props.theme),
  margin: "1rem 0",
}))

const AccordionButton = styled.button((props) => ({
  backgroundColor: props.theme.twColors.neutral[100],
  color: props.theme.twColors.neutral[900],
  width: "100%",
  height: "100%",
  padding: "1rem",
  textAlign: "left",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: props.theme.twColors.neutral[200],
  },
}))
const AccordionContent = styled(motion.div)()

export const Accordion = ({ title, children }: AccordionProps) => {
  const ref = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <AccordionWrapper
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.3 }}
    >
      <AccordionButton onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <h3>{isOpen ? "-" : "+"}</h3>
      </AccordionButton>
      <AnimatePresence>
        {isOpen && (
          <AccordionContent
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            {children}
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionWrapper>
  )
}
