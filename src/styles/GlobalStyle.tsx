import { css, Global, keyframes, Theme, useTheme } from "@emotion/react"

export const GlobalStyle = () => {
  const theme = useTheme()
  const { baseColors } = theme
  return (
    <Global
      styles={css({
        a: { textDecoration: "none", color: "inherit" },
        body: {
          backgroundColor: baseColors.white,
          color: baseColors.black,
          display: "grid",
          placeItems: "center",
          animation: `${backgroundChangeKeyframes(theme)} 120s infinite`,
          animationDirection: "alternate",
        },
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          fontFamily: "Overpass, monospace",
        },
        "h1, h2, h3, h4": { fontFamily: "Inconsolata, monospace" },
      })}
    />
  )
}

const backgroundChangeKeyframes = (props: Theme) => {
  const { bright } = props
  return keyframes({
    "0%": {
      backgroundColor: bright.green,
    },
    "20%": {
      backgroundColor: bright.red,
    },
    "40%": {
      backgroundColor: bright.purple,
    },
    "60%": {
      backgroundColor: bright.pink,
    },
    "80%": {
      backgroundColor: bright.yellow,
    },
    "100%": {
      backgroundColor: bright.blue,
    },
  })
}
