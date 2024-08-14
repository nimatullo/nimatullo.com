import { db } from "@app/db"
import { HoarderLinks, Playlist } from "@app/nimatullo-types"
import { Accordion } from "@components/scaffold/Accordion"
import { PageProps } from "gatsby"
import React from "react"

interface MediaPageProps extends PageProps {
  serverData: { playlists: Playlist[]; links: HoarderLinks[] }
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
            <li key={link.url}>{link.title}</li>
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
