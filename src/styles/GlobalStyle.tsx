import { complementColor, TwColors, twColors } from "@app/styles/colors"
import { randomMinMax } from "@app/utils"
import { css, Global, keyframes, Theme, useTheme } from "@emotion/react"

const viewTransitionFadeOut = keyframes({
  "0%": { opacity: 1, transform: "scale(1) rotate(0deg) translateY(0)" },
  "35%": { opacity: 0.7, transform: "scale(1.03) rotate(-1.5deg) translateY(-4px)" },
  "100%": { opacity: 0, transform: "scale(0.88) rotate(4deg) translateY(30px)" },
})

const viewTransitionFadeIn = keyframes({
  "0%": { opacity: 0, transform: "scale(0.85) rotate(-4deg) translateY(-24px)" },
  "50%": { opacity: 1, transform: "scale(1.04) rotate(1deg) translateY(5px)" },
  "75%": { opacity: 1, transform: "scale(0.99) rotate(-0.3deg) translateY(-1px)" },
  "100%": { opacity: 1, transform: "scale(1) rotate(0deg) translateY(0)" },
})

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
        "::view-transition-old(root)": {
          animation: `${viewTransitionFadeOut} 280ms ease-in forwards`,
        },
        "::view-transition-new(root)": {
          animation: `${viewTransitionFadeIn} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
        },
        "@media (prefers-reduced-motion: reduce)": {
          "::view-transition-old(root), ::view-transition-new(root)": {
            animation: "none",
          },
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
