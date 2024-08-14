import styled from "@emotion/styled"
import { AnimatePresence, motion, useInView } from "framer-motion"
import React from "react"

interface AccordionProps {
  title: string
  children: React.ReactNode
}

const AccordionWrapper = styled(motion.div)((props) => ({
  margin: "1rem 0",
  backgroundColor: props.theme.baseColors.black,
  border: `3px solid ${props.theme.twColors.gray[700]}`,
}))
const AccordionButton = styled.button((props) => ({
  backgroundColor: props.theme.baseColors.black,
  color: props.theme.baseColors.white,
  width: "100%",
  height: "100%",
  padding: "1rem",
  textAlign: "left",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  "&:hover": { opacity: 0.5 },
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
