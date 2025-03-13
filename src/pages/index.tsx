import { homepageMarqueeTexts } from "@app/constants"
import { useDarkMode } from "@app/hooks"
import { GlobalStyle, theme, themeDark } from "@app/styles"
import { homepageTextCss, marqueeWrapperCss } from "@app/styles/homepageStyles"
import { debounce } from "@app/utils"
import { Footer } from "@components/Footer"
import { MarqueeWall } from "@components/fun/MarqueeWall"
import { TransformingText } from "@components/fun/TransformingText"
import { BackgroundMedia } from "@components/home/BackgroundMedia"
import { HomeGrid } from "@components/home/HomeGrid"
import { Container } from "@components/scaffold"
import { Helmet } from "@components/scaffold/Head"
import { ThemeProvider } from "@emotion/react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"

const IndexPage: React.FC<PageProps> = () => {
  const [hoverTitle, setHoverTitle] = React.useState<string>("why worry")

  const { isDarkMode } = useDarkMode()

  const debouncedSetHoverTitle = React.useCallback(
    debounce(
      (t: string | null) =>
        setHoverTitle(t ? t.toLocaleLowerCase() : "why worry"),
      50
    ),
    [hoverTitle]
  )

  const { fallVideo, anxietyVideo } = useStaticQuery(
    graphql`
      query {
        fallVideo: file(relativePath: { eq: "fall.gif" }) {
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
      <div
        css={{
          display: "grid",
          placeItems: "center",
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
      >
        <Container>
          <GlobalStyle />
          <TransformingText
            textCss={homepageTextCss}
            wrapperCss={{
              bottom: 0,
              left: 0,
              position: "absolute",
              overflow: "hidden",
            }}
            text={hoverTitle}
          />
          <HomeGrid onTitleHover={debouncedSetHoverTitle} />

          <Footer onHover={debouncedSetHoverTitle} />
        </Container>

        <MarqueeWall
          wrapperCss={marqueeWrapperCss}
          text={homepageMarqueeTexts}
        />

        <BackgroundMedia
          media={[
            {
              src: anxietyVideo.publicURL,
              type: "gif",
              alt: "anxiety",
              css: {
                zIndex: -1,
                position: "absolute",
                right: 0,
                mixBlendMode: "darken",
                overflow: "hidden",
                width: "50%",
                objectFit: "cover",
              },
            },
            {
              src: fallVideo.publicURL,
              type: "img",
              alt: "falling leaves",
              css: {
                zIndex: -1,
                position: "absolute",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100%",
                maxWidth: 400,
                mixBlendMode: "multiply",
                overflow: "hidden",
                objectFit: "cover",
              },
            },
          ]}
        />
      </div>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Helmet title="homepage" />
