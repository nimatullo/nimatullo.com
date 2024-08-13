import styled from "@emotion/styled"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-content: center;
  column-gap: 1em;
  row-gap: 1em;
`
