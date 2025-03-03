import { complementColor, twColors, TwColorShades } from "@app/styles/colors"
import { randomMinMax } from "@app/utils"
import { css, Global, useTheme } from "@emotion/react"

export const GlobalStyle = () => {
  const theme = useTheme()
  const { baseColors } = theme
  const colorBase = backgroundColors[randomMinMax(0, backgroundColors.length)]
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
          // cursor: "none",
        },
        // "*::before, *::after": { cursor: "none" },
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

const colorShade: TwColorShades = 500
const backgroundColors = [
  twColors.green[colorShade],
  twColors.red[colorShade],
  twColors.purple[colorShade],
  twColors.pink[colorShade],
  twColors.yellow[colorShade],
  twColors.blue[colorShade],
]
