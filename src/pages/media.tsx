import { useDB } from "@app/hooks"
import { Accordion } from "@components/scaffold/Accordion"
import { ExternalAnchor } from "@components/scaffold/ExternalAnchor"
import { Helmet } from "@components/scaffold/Head"
import { ListItem } from "@components/scaffold/List"
import { PageIntro } from "@components/scaffold/PageIntro"
import React from "react"

const MediaPage = () => {
  const { data: links, loading: linksLoading } = useDB("links")
  const { data: playlists, loading: playlistsLoading } = useDB("playlists")

  return (
    <React.Fragment>
      <PageIntro header="Links" loading={linksLoading}>
        <ul>
          {links.map((link) => (
            <ListItem key={link.url}>
              <ExternalAnchor href={link.url}>{link.title}</ExternalAnchor>
            </ListItem>
          ))}
        </ul>
      </PageIntro>

      <PageIntro header="Playlists" loading={playlistsLoading}>
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

export const Head = () => <Helmet title="media" />
