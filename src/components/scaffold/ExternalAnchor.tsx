import { useCursorHandlers } from "@app/hooks"
import styled from "@emotion/styled"
import React from "react"

const StyledAnchor = styled.a((props) => ({
  textDecoration: "underline",
  transition: "all 0.2s",
  lineHeight: 1.2,
  "&:hover": {
    backgroundColor: props.theme.twColors.neutral[200],
    color: props.theme.twColors.neutral[900],
    textDecoration: "none",
    fontFamily: "DM Serif Text, serif",
    lineHeight: 1.2,
    fontSize: "1.2rem",
  },
}))

export const ExternalAnchor: React.FC<React.AnchorHTMLAttributes<any>> = (
  props,
) => {
  const { href, children, ...rest } = props
  const mouseHandlers = useCursorHandlers()
  return (
    <React.Fragment>
      <StyledAnchor
        {...rest}
        {...mouseHandlers}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </StyledAnchor>
    </React.Fragment>
  )
}
