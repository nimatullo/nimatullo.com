import { Image } from "@components/scaffold"
import { Helmet } from "@components/scaffold/Head"
import { PageIntro } from "@components/scaffold/PageIntro"
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby"
import * as React from "react"

const NotFoundPage: React.FC<PageProps> = () => {
  const imgLink = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lost.png" }) {
        publicURL
      }
    }
  `).file.publicURL

  return (
    <PageIntro header="Lost?">
      <Image src={imgLink} />
      <p>
        what are you up to...?{" "}
        <Link
          css={{
            textDecoration: "underline",
            "&:hover": { fontWeight: 700 },
          }}
          to="/"
        >
          return to the fold
        </Link>
        .
      </p>
    </PageIntro>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <Helmet title="not found" />
