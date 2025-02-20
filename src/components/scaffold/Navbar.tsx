import { useCursorHandlers, useMobile } from "@app/hooks"
import { navRoutes } from "@app/routes"
import { randomMinMax } from "@app/utils"
import { Emoji } from "@components/Emoji"
import { Flex } from "@components/scaffold/Flex"
import { ColumnList } from "@components/scaffold/List"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link, PageProps } from "gatsby"
import React from "react"

const Nav = styled.nav((props) => ({
  width: "100%",
  padding: 4,
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${props.theme.twColors.gray[800]}`,
  span: {
    fontFamily: "Inconsolata,monospace !important",
    letterSpacing: 2,
  },
}))

const NavItem = styled.li<{ active: boolean }>((props) => ({
  color: props.active
    ? props.theme.twColors.neutral[100]
    : props.theme.twColors.neutral[900],
  transition: "ease-in-out 0.2s",
  fontSize: "1.1rem",
  transform: props.active
    ? `scale(1.1) rotate(${randomMinMax(-5, 5)}deg)`
    : "scaleY(-1)",
  "&:hover": {
    color: props.theme.twColors.neutral[100],
    backgroundColor: props.theme.twColors.gray[800],
    span: {
      transform: !props.active ? "scaleY(-1) scale(1.1)" : "scaleY(1)",
      textDecoration: "underline",
      textTransform: "uppercase",
    },
  },
}))

export const Navbar: React.FC<PageProps> = (props) => {
  const [active, setActive] = React.useState<string | null>(null)
  const cursorHandlers = useCursorHandlers()
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
            <NavItem {...cursorHandlers} active={isActive}>
              <Link to={route.link}>
                <Flex gap={4} css={{ height: "100%" }}>
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
