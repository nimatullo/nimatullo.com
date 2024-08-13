import { css, Global, keyframes, Theme, useTheme } from "@emotion/react"

export const GlobalStyle = () => {
  const theme = useTheme()
  const { colors } = theme
  return (
    <Global
      styles={css({
        a: { textDecoration: "none", color: "inherit" },
        body: {
          backgroundColor: colors.white,
          color: colors.black,
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

const backgroundChangeKeyframes = (props: Theme) =>
  keyframes({
    "0%": {
      backgroundColor: props.colors.green,
    },
    "20%": {
      backgroundColor: props.colors.red,
    },
    "40%": {
      backgroundColor: props.colors.purple,
    },
    "60%": {
      backgroundColor: props.colors.pink,
    },
    "80%": {
      backgroundColor: props.colors.yellow,
    },
    "100%": {
      backgroundColor: props.colors.blue,
    },
  })
