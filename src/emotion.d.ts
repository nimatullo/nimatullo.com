import "@emotion/react"
import type {
  BrightColors,
  Color,
  TwColors,
  TwColorShades,
} from "./styles/colors"

declare module "@emotion/react" {
  export interface Theme {
    baseColors: { [key in Color]: string }
    bright: { [key in BrightColors]: string }
    twColors: { [key in TwColors]: { [key in TwColorShades]: string } }
  }
}
