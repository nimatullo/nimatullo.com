import { useCursorHandlers } from "@app/hooks"
import styled from "@emotion/styled"
import React from "react"

const StyledAnchor = styled.a((props) => ({
  textDecoration: "underline",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: props.theme.twColors.neutral[200],
    color: props.theme.twColors.neutral[900],
    textDecoration: "none",
    textTransform: "uppercase",
  },
}))

export const ExternalAnchor: React.FC<React.AnchorHTMLAttributes<any>> = (
  props
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
