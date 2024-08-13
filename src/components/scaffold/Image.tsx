import styled from "@emotion/styled"

export const Image = styled.img((props: { width?: string }) => ({
  width: props.width ?? "100%",
  height: "auto",
}))
