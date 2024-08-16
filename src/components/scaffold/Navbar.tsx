import { useMobile } from "@app/hooks"
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
  borderBottom: `1px solid ${props.theme.twColors.gray[800]}`,
}))

const NavItem = styled.li<{ active: boolean }>((props) => ({
  backgroundColor: props.active
    ? props.theme.twColors.gray[900]
    : "transparent",
  color: props.active
    ? props.theme.twColors.neutral[100]
    : props.theme.twColors.neutral[900],
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: props.theme.twColors.gray[900],
    color: props.theme.twColors.neutral[100],
  },
}))

export const Navbar: React.FC<PageProps> = (props) => {
  const [active, setActive] = React.useState<string | null>(null)
  const { location } = props
  const { isMobile } = useMobile()

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
                  {!isMobile && <Emoji {...route.emoji} />}
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
