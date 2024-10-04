import { graphql, useStaticQuery } from "gatsby"

export const Helmet: React.FC<{ title: string }> = ({ title }) => {
  const fav = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "favicon.png" }) {
        publicURL
      }
    }
  `).file.publicURL

  return (
    <head>
      <title>{`nimatullo | ${title}`}</title>
      <meta name="description" content="sherzod's personal website" />
      <meta name="author" content="Sherzod Nimatullo" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex, noodp, noarchive, noimageindex" />
      <link rel="icon" href={fav} />
    </head>
  )
}
