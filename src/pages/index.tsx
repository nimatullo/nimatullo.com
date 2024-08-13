import { homePageRoutes } from "@app/routes"
import { Footer } from "@components/Footer"
import { Container, Grid, TextCard } from "@components/layout"
import styled from "@emotion/styled"
import type { HeadFC, PageProps } from "gatsby"
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
  textShadow: "0 1px 4px rgba(31, 38, 135, 0.37",
  zIndex: -1,
})

const IndexPage: React.FC<PageProps> = () => {
  const [hoverTitle, setHoverTitle] = React.useState<string | null>(null)
  return <BlobContainer>
    <Container>
      <BlobText>
        {hoverTitle ?? "why worry"}
      </BlobText>
      <Grid>
        {homePageRoutes.map((r) => <TextCard {...r} />)}
      </Grid>
      <Footer />
    </Container>
  </BlobContainer>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
