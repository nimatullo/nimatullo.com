import { Image } from "@components/scaffold"
import { GifVideo } from "@components/scaffold/GifVideo"
import { Interpolation, Theme } from "@emotion/react"
import React from "react"

interface Media {
  src: string
  alt: string
  type: "gif" | "img"
  css: Interpolation<Theme>
}

interface BackgroundMediaProps {
  media: Media[]
}

export const BackgroundMedia = (props: BackgroundMediaProps) => {
  const { media } = props

  return (
    <React.Fragment>
      {media.map((m, i) => {
        switch (m.type) {
          case "gif":
            return <GifVideo key={i} {...m} />
          case "img":
            return <Image key={i} {...m} />
          default:
            return null
        }
      })}
    </React.Fragment>
  )
}
