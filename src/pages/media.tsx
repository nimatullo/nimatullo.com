import { db } from "@app/db"
import { LinkWithDisplay } from "@app/nimatullo-types"
import { Accordion } from "@components/scaffold/Accordion"
import { ExternalAnchor } from "@components/scaffold/ExternalAnchor"
import { ListItem } from "@components/scaffold/List"
import { PageIntro } from "@components/scaffold/PageIntro"
import { PageProps } from "gatsby"
import React from "react"

interface MediaPageProps extends PageProps {
  serverData: { playlists: LinkWithDisplay[]; links: LinkWithDisplay[] }
}

const MediaPage = ({ serverData }: MediaPageProps) => {
  const { playlists, links } = serverData

  return (
    <React.Fragment>
      <PageIntro header="Links">
        <ul>
          {links.map((link) => (
            <ListItem key={link.url}>
              <ExternalAnchor href={link.url}>{link.title}</ExternalAnchor>
            </ListItem>
          ))}
        </ul>
      </PageIntro>

      <PageIntro header="Playlists">
        {playlists.map((playlist) => (
          <Accordion key={playlist.url} title={playlist.title}>
            <iframe src={playlist.url} width="100%" height="500" />
          </Accordion>
        ))}
      </PageIntro>
    </React.Fragment>
  )
}

export default MediaPage

export async function getServerData() {
  const [playlists, links] = await Promise.all([
    db.playlists.all(),
    db.links.all(),
  ])

  return { props: { playlists, links } }
}
