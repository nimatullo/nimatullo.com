import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Loader } from "react-feather"

const Spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

const SpinnerWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  padding: "1em",
  animation: `${Spin} 2s linear infinite`,
})

export const Spinner = () => (
  <SpinnerWrapper>
    <Loader />
  </SpinnerWrapper>
)
