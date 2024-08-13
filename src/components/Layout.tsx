import { GlobalStyle, theme } from "@app/styles"
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
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {renderNavbar && <Navbar {...props} />}
        {props.children}
        {renderFooter && <Footer />}
      </Container>
    </ThemeProvider>
  )
}
