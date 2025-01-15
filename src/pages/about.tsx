import { useDB } from "@app/hooks"
import { Image } from "@components/scaffold"
import { ExternalAnchor } from "@components/scaffold/ExternalAnchor"
import { Helmet } from "@components/scaffold/Head"
import { PageIntro } from "@components/scaffold/PageIntro"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const AboutPage = () => {
  const { data: things, loading } = useDB("aboutPageLinks")

  const boyImgLink = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "boy.jpg" }) {
        publicURL
      }
    }
  `).file.publicURL

  return (
    <PageIntro header="About" loading={loading}>
      <div
        css={{
          p: { marginBottom: 20 },
        }}
      >
        <Image
          css={{
            boxShadow: "0 1px 4px rgba(31, 38, 135, 0.37)",
            width: "80%",
            margin: "auto",
            display: "block",
            marginBottom: 20,
            mixBlendMode: "hard-light",
          }}
          src={boyImgLink}
          alt="boy"
        />
        <p>
          i was just a mere boy when i developed a love for computers. an uzbek
          boy. living in uzbekistan. didn’t know what an internet was, but i
          knew on windows XP if you go to start → all programs → games, then you
          can play the pinball one.
        </p>
        <p>
          in high school i took a computer science AP class, thought it was
          stupid that i have to write all this computer shit to see hello world
          print. then i did some{" "}
          <ExternalAnchor href="https://codingbat.com/java">
            leet code-esque problems on this codingbat dot com website.
          </ExternalAnchor>{" "}
          they felt like puzzles and when i got them right, it felt good in my
          belly.
        </p>
        <p>
          then i got this{" "}
          <ExternalAnchor href="https://www.dummies.com/book/technology/programming-web-design/java/java-for-dummies-2-281748/">
            java for dummies book
          </ExternalAnchor>{" "}
          and made a basketball score desktop app using swing (rip). then i got
          a web dev book as a gift and i made the first iteration of this
          website.
        </p>
        <p>
          presently, i still make basketball score apps but on web this time and
          for the brooklyn nets.
        </p>

        <p>
          outside of this, here's some more things i do / enjoy / support:{" "}
          {things.map((thing) =>
            thing.url ? (
              <React.Fragment>
                <ExternalAnchor key={thing.url} href={thing.url}>
                  {thing.title}
                </ExternalAnchor>
                {", "}
              </React.Fragment>
            ) : (
              <>{thing.title}, </>
            )
          )}
        </p>
      </div>
    </PageIntro>
  )
}

export default AboutPage

export const Head = () => <Helmet title="about" />
