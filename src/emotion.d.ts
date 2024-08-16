import "@emotion/react"
import type { Color, TwColors, TwColorShades } from "./styles/colors"

declare module "@emotion/react" {
  export interface Theme {
    baseColors: { [key in Color]: string }
    twColors: { [key in TwColors]: { [key in TwColorShades]: string } }
  }
}
