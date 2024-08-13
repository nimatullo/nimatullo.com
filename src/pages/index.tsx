import { homePageRoutes } from "@app/routes"
import { colors, GlobalStyle, theme } from "@app/styles"
import { debounce } from "@app/utils"
import { Footer } from "@components/Footer"
import { Container, Grid, TextCard } from "@components/scaffold"
import { css, ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { navigate, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"

const BlobContainer = styled.div({
  display: "grid",
  placeItems: "center",
  width: "100vw",
  height: "100dvh",
  position: "relative",
  overflow: "hidden",
})

const BlobText = styled.h1({
  fontFamily: "DM Serif Text, serif",
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  mixBlendMode: "difference",
  textAlign: "center",
  margin: 0,
  textAlignLast: "justify",
  fontSize: "calc(20vw)",
  fontWeight: 600,
  transition: "all 0.5s",
  textShadow: "0 1px 4px rgba(31, 38, 135, 0.37)",
  zIndex: -1,
})

const textCardGlassStyle = css({
  background: "rgba(255, 255, 255, 0.25)",
  boxShadow: "0 1px 4px rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: 40,
  color: colors.black,
  minHeight: 200,
  transition: "ease 0.2s",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
  fontSize: "1.2rem",
  h4: {
    textTransform: "uppercase",
  },
  p: {
    fontSize: "smaller",
  },
})

const IndexPage: React.FC<PageProps> = () => {
  const [hoverTitle, setHoverTitle] = React.useState<string | null>(null)

  const debouncedSetHoverTitle = React.useCallback(
    debounce(
      (t: string | null) => setHoverTitle(t ? t.toLocaleLowerCase() : null),
      50
    ),
    [hoverTitle]
  )

  return (
    <ThemeProvider theme={theme}>
      <BlobContainer>
        <Container>
          <GlobalStyle />
          <BlobText>{hoverTitle ?? "why worry"}</BlobText>
          <Grid>
            {homePageRoutes.map((r) => (
              <TextCard
                css={textCardGlassStyle}
                onClick={() => navigate(r.link)}
                onMouseEnter={(_) => debouncedSetHoverTitle(r.title)}
                onMouseLeave={(_) => debouncedSetHoverTitle(null)}
                key={r.title}
                {...r}
              />
            ))}
          </Grid>
          <Footer onHover={debouncedSetHoverTitle} />
        </Container>
      </BlobContainer>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
