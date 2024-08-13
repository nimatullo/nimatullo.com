import styled from "@emotion/styled"

type ItemPositions = "start" | "center" | "end" | "stretch"
type JustifyPositions =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"

interface FlexProps {
  direction?: "row" | "column"
  justify?: JustifyPositions
  align?: ItemPositions
  gap?: number
}
export const Flex = styled.div((props: FlexProps) => ({
  display: "flex",
  flexDirection: props.direction ?? "row",
  justifyContent: props.justify ?? "center",
  alignItems: props.align ?? "center",
  gap: props.gap ?? 0,
}))
