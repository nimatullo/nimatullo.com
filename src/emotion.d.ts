import "@emotion/react"
import type { Color } from "./styles/colors"

declare module "@emotion/react" {
  export interface Theme {
    colors: { [key in Color]: string }
  }
}
