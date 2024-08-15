import { navRoutes } from "@app/routes"
import { Emoji } from "@components/Emoji"
import { Flex } from "@components/scaffold/Flex"
import { ColumnList } from "@components/scaffold/List"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link, PageProps } from "gatsby"
import React from "react"

const Nav = styled.nav((props) => ({
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${props.theme.baseColors.black}`,
}))

const NavItem = styled.li<{ active: boolean }>((props) => ({
  backgroundColor: props.active ? props.theme.baseColors.black : "transparent",
  color: props.active
    ? props.theme.baseColors.white
    : props.theme.baseColors.black,
  "&:hover": {
    backgroundColor: props.theme.baseColors.black,
    color: props.theme.baseColors.white,
  },
}))

export const Navbar: React.FC<PageProps> = (props) => {
  const [active, setActive] = React.useState<string | null>(null)
  const { location } = props

  React.useEffect(() => {
    const path = props.location.pathname
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
    setActive(path)
  }, [location])

  return (
    <Nav>
      <ColumnList column={navRoutes.length} css={css({ width: "100%" })}>
        {navRoutes.map((route) => {
          const isActive =
            active === route.link.replace(/[^a-zA-Z ]/g, "").toLowerCase()

          return (
            <NavItem active={isActive}>
              <Link to={route.link}>
                <Flex css={{ height: "100%" }}>
                  <Emoji {...route.emoji} />
                  <span>{route.title}</span>
                </Flex>
              </Link>
            </NavItem>
          )
        })}
      </ColumnList>
    </Nav>
  )
}
