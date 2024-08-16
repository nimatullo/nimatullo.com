import { useDarkMode } from "@app/hooks"
import { GlobalStyle, theme, themeDark } from "@app/styles"
import { Footer } from "@components/Footer"
import { Container, Navbar } from "@components/scaffold"
import { ThemeProvider } from "@emotion/react"
import { PageProps } from "gatsby"

interface LayoutProps extends PageProps {
  renderNavbar?: boolean
  renderFooter?: boolean
}

export const Layout = (props: LayoutProps) => {
  const { renderNavbar = true, renderFooter = true } = props
  const { isDarkMode } = useDarkMode()

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : theme}>
      <Container>
        <GlobalStyle />
        {renderNavbar && <Navbar {...props} />}
        {props.children}
        {renderFooter && <Footer />}
      </Container>
    </ThemeProvider>
  )
}
