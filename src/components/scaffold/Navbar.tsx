import { navRoutes } from "@app/routes"
import { Emoji } from "@components/Emoji"
import { UnorderedList } from "@components/scaffold/UnorderedList"
import { css, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Link, PageProps } from "gatsby"
import React from "react"

const Nav = styled.nav((props) => ({
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${props.theme.colors.black}`,
}))

const NavItem = styled.li<{ active: boolean }>((props) => ({
  backgroundColor: props.active ? props.theme.colors.black : "transparent",
  color: props.active ? props.theme.colors.white : props.theme.colors.black,
  "&:hover": {
    backgroundColor: props.theme.colors.black,
    color: props.theme.colors.white,
  },
}))

export const Navbar: React.FC<PageProps> = (props) => {
  const [active, setActive] = React.useState<string | null>(null)

  React.useEffect(() => {
    const path = props.location.pathname
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
    setActive(path)
  }, [])

  const { colors } = useTheme()

  return (
    <Nav>
      <UnorderedList css={css({ width: "100%" })}>
        {navRoutes.map((route) => {
          const isActive =
            active === route.link.replace(/[^a-zA-Z ]/g, "").toLowerCase()

          return (
            <NavItem active={isActive}>
              <Link to={route.link}>
                <Emoji {...route.emoji} />
                <span>{route.title}</span>
              </Link>
            </NavItem>
          )
        })}
      </UnorderedList>
    </Nav>
  )
}
