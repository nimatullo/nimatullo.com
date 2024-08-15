import styled from "@emotion/styled"
import React from "react"

const StyledAnchor = styled.a((props) => ({
  textDecoration: "underline",
  "&:hover": {
    backgroundColor: props.theme.baseColors.black,
    color: props.theme.baseColors.white,
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
