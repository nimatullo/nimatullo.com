import { css, SerializedStyles } from "@emotion/react"

export const hover = (style: SerializedStyles) =>
  css({
    "&:hover": style,
  })
