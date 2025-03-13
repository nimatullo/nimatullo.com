import { complementColor, TwColors, twColors } from "@app/styles/colors"
import { randomMinMax } from "@app/utils"
import { css, Global, Theme, useTheme } from "@emotion/react"

export const GlobalStyle = () => {
  const theme = useTheme()
  const { baseColors } = theme
  const { primary, complement } = getPallete(theme)

  return (
    <Global
      styles={css({
        a: { textDecoration: "none", color: "inherit" },
        body: {
          color: baseColors.black,
          display: "grid",
          placeItems: "center",
          background: primary,
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
          backgroundColor: complement,
        },
      })}
    />
  )
}

const getPallete = (theme: Theme) => {
  const options = [
    "green",
    "red",
    "purple",
    "pink",
    "yellow",
    "blue",
  ] as TwColors[]
  const colorShade = 300
  const color = options[randomMinMax(0, options.length)]

  const primary = theme.twColors[color][colorShade]
  const complement = complementColor(primary)

  return {
    primary,
    complement,
  }
}
