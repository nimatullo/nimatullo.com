import { useDB } from "@app/hooks"
import { ExternalAnchor } from "@components/scaffold/ExternalAnchor"
import { Helmet } from "@components/scaffold/Head"
import { PageIntro } from "@components/scaffold/PageIntro"
import React from "react"

const AboutPage = () => {
  const { data: things, loading } = useDB("aboutPageLinks")
  return (
    <PageIntro header="About" loading={loading}>
      <div
        css={{
          p: { marginBottom: 20 },
        }}
      >
        <p>
          When someone asks you to tell them more about yourself, what do they
          mean? I always thought that was a strange question. Do people actually
          have answers to that? The people in my life often have one standout
          characteristic. My brain seems to use this to compartmentalize them.
          For example, my friend{" "}
          <ExternalAnchor href="https://edrisahmady.com">Edris</ExternalAnchor>{" "}
          loves cocktails—that's his thing. But for some reason, I can't think
          of my one thing. I think my brain understands that I am many things
          and struggles to pinpoint just one. But it's really good at
          identifying unique traits in others, even though they are their own
          people with their own many experiences and interests.
        </p>

        <p>
          Here’s a list of my many things:{" "}
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
