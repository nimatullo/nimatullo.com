import {
  baseColors,
  baseColorsDark,
  twColors,
  twColorsDark,
} from "@app/styles/colors"

export const theme = {
  twColors,
  baseColors,
}

export const themeDark = {
  twColors: twColorsDark,
  baseColors: baseColorsDark,
}

export { GlobalStyle } from "./GlobalStyle"

export const transition = {
  duration: 0.01,
  stiffness: 100,
  damping: 10,
  ease: [0.43, 0.13, 0.23, 0.96],
}
