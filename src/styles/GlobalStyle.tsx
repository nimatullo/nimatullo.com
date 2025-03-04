import { complementColor, randomHSLColor, twColors } from "@app/styles/colors"
import { css, Global, keyframes, Theme, useTheme } from "@emotion/react"

export const GlobalStyle = () => {
  const theme = useTheme()
  const { baseColors } = theme
  const colorBase = randomHSLColor()
  const inverted = complementColor(colorBase)

  return (
    <Global
      styles={css({
        a: { textDecoration: "none", color: "inherit" },
        body: {
          color: baseColors.black,
          display: "grid",
          placeItems: "center",
          background: colorBase,
          transition: "background 0.3s",
        },
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          fontFamily: "Overpass, monospace",
          cursor: "none",
        },
        "*::before, *::after": { cursor: "none" },
        "h1, h2, h3, h4": { fontFamily: "Inconsolata, monospace" },
        iframe: { border: "none" },
        "::selection": {
          color: twColors.neutral[700],
          backgroundColor: inverted,
        },
      })}
    />
  )
}

const backgroundChangeKeyframes = (props: Theme) => {
  const { twColors } = props
  return keyframes({
    "0%": {
      backgroundColor: twColors.green[300],
    },
    "20%": {
      backgroundColor: twColors.red[300],
    },
    "40%": {
      backgroundColor: twColors.purple[300],
    },
    "60%": {
      backgroundColor: twColors.pink[300],
    },
    "80%": {
      backgroundColor: twColors.yellow[300],
    },
    "100%": {
      backgroundColor: twColors.blue[300],
    },
  })
}
