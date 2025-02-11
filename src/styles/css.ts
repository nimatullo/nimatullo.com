import { css, SerializedStyles, Theme } from "@emotion/react"

export const hover = (style: SerializedStyles) =>
  css({
    "&:hover": style,
  })

export const getBorderedContainerStyle = (theme: Theme) => ({
  border: `2px solid ${theme.twColors.neutral[600]}`,
  backgroundColor: theme.twColors.neutral[100],
})
