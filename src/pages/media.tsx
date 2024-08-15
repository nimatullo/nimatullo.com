import { db } from "@app/db"
import { HoarderLink, Playlist } from "@app/nimatullo-types"
import { Accordion } from "@components/scaffold/Accordion"
import { ListItem } from "@components/scaffold/List"
import { PageProps } from "gatsby"
import React from "react"

interface MediaPageProps extends PageProps {
  serverData: { playlists: Playlist[]; links: HoarderLink[] }
}

const MediaPage = ({ serverData }: MediaPageProps) => {
  const { playlists, links } = serverData
  return (
    <React.Fragment>
      <div>
        <h3>Playlists</h3>
        {playlists.map((playlist) => (
          <Accordion key={playlist.name} title={playlist.name}>
            <iframe src={playlist.source} width="100%" height="500" />
          </Accordion>
        ))}
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          {links.map((link) => (
            <ListItem key={link.url}>
              <a href={link.url}>{link.title}</a>
            </ListItem>
          ))}
        </ul>
      </div>
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
