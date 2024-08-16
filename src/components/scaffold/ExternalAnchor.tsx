import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

const StyledAnchor = styled(motion.a)((props) => ({
  textDecoration: "underline",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: props.theme.twColors.neutral[200],
    color: props.theme.twColors.neutral[900],
    textDecoration: "none",
  },
}))

export const ExternalAnchor: React.FC<React.AnchorHTMLAttributes<any>> = (
  props
) => {
  const { href, children } = props
  return (
    <React.Fragment>
      <StyledAnchor href={href} target="_blank" rel="noreferrer">
        {children}
      </StyledAnchor>
    </React.Fragment>
  )
}
