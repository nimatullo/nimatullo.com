import styled from "@emotion/styled"

export const UnorderedList = styled.ul({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "1rem",
  textAlign: "center",
  listStyle: "none",
})

export const ListItem = styled.li((props) => ({
  padding: "2px 0",
  listStyle: "none",
  textDecoration: "underline",
  "& a:hover": {
    backgroundColor: props.theme.baseColors.black,
    color: props.theme.baseColors.white,
  },
}))
