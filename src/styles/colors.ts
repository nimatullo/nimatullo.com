const baseColors = {
  white: "#fefefe",
  black: "#1e1e1e",
}

const bright = {
  green: "#5af64f",
  red: "#f02222",
  purple: "#9332f4",
  pink: "#eb2bae",
  yellow: "#f4d41d",
  blue: "#27ecf0",
}

export const colors = {
  ...baseColors,
  ...bright,
}

export type Color = keyof typeof colors
