import { useDarkMode, useMobile } from "@app/hooks"
import { homePageRoutes } from "@app/routes"
import { GlobalStyle, theme, themeDark } from "@app/styles"
import { baseColors } from "@app/styles/colors"
import { debounce } from "@app/utils"
import { Blob } from "@components/Blob"
import { Footer } from "@components/Footer"
import { Container, Grid, TextCard } from "@components/scaffold"
import { GifVideo } from "@components/scaffold/GifVideo"
import { Helmet } from "@components/scaffold/Head"
import { css, ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import {
  graphql,
  navigate,
  useStaticQuery,
  type HeadFC,
  type PageProps,
} from "gatsby"
import * as React from "react"

const BlobContainer = styled.div<{ isMobile: boolean }>((props) => ({
  display: "grid",
  placeItems: "center",
  width: "100vw",
  height: "100dvh",
  position: "relative",
  overflow: props.isMobile ? "visible" : "hidden",
}))

const BlobText = styled.h1({
  fontFamily: "DM Serif Text, serif",
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  mixBlendMode: "soft-light",
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
  color: baseColors.black,
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
  "&:hover": {
    backdropFilter: "brightness(0.7)",
    cursor: "pointer",
  },
})

const IndexPage: React.FC<PageProps> = () => {
  const [hoverTitle, setHoverTitle] = React.useState<string | null>(null)
  const { isMobile } = useMobile()
  const { isDarkMode } = useDarkMode()

  const debouncedSetHoverTitle = React.useCallback(
    debounce(
      (t: string | null) => setHoverTitle(t ? t.toLocaleLowerCase() : null),
      50
    ),
    [hoverTitle]
  )

  const { fallVideo, anxietyVideo } = useStaticQuery(
    graphql`
      query {
        fallVideo: file(relativePath: { eq: "fall.webm" }) {
          publicURL
        }
        anxietyVideo: file(relativePath: { eq: "anxiety.webm" }) {
          publicURL
        }
      }
    `
  )

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : theme}>
      <BlobContainer isMobile={isMobile}>
        <Container>
          <GlobalStyle />
          <BlobText>{hoverTitle ?? "why worry"}</BlobText>
          <Grid>
            {homePageRoutes.map((r) => (
              <TextCard
                css={{ ...textCardGlassStyle, height: isMobile ? 100 : 200 }}
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

        <GifVideo
          src={anxietyVideo.publicURL}
          alt="anxiety"
          css={{
            zIndex: -2,
            position: "absolute",
            right: 0,
            mixBlendMode: "darken",
            overflow: "hidden",
            width: "50%",
            objectFit: "cover",
          }}
        />

        <GifVideo
          src={fallVideo.publicURL}
          alt="falling leaves"
          css={{
            zIndex: -10,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            maxWidth: 400,
            mixBlendMode: "multiply",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />

        {Array(2)
          .fill(0)
          .map((_, i) => (
            <Blob key={i} />
          ))}
      </BlobContainer>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Helmet title="homepage" />
