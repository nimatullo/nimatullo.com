import styled from "@emotion/styled"

export const Container = styled.div({
  margin: "0 auto",
  padding: "1rem",
  width: 992,
  position: "relative",

  "@media (max-width: 992px)": {
    width: "50ch",
  },
  "@media (max-width: 768px)": {
    width: "40ch",
  },
  "@media (max-width: 576px)": {
    width: "100%",
    padding: "0.5rem",
  },
})
