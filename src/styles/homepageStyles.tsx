import { css } from "@emotion/react"

export const homepageTextCss = css({
  fontFamily: "DM Serif Text, serif",
  whiteSpace: "nowrap",
  mixBlendMode: "soft-light",
  textAlign: "center",
  margin: 0,
  textAlignLast: "justify",
  textTransform: "lowercase",
  fontSize: "calc(20vw)",
  fontWeight: 600,
  transition: "all 0.5s",
  textShadow: "0 1px 4px rgba(31, 38, 135, 0.37)",
  display: "inline-block",
  zIndex: -1,
})

export const marqueeWrapperCss = css({
  position: "absolute",
  left: 0,
  zIndex: -1,
  mixBlendMode: "soft-light",
  width: "100%",
  maxWidth: 400,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
})
