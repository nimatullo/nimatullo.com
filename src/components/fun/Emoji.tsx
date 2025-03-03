import { Image } from "@components/scaffold"
import React from "react"
import type { EmojiProps } from "../../nimatullo-types"

const emojiData = {
  socks: "https://em-content.zobj.net/thumbs/240/apple/354/socks_1f9e6.png",
  rocket: "https://em-content.zobj.net/thumbs/240/apple/354/rocket_1f680.png",
  clipartrocket:
    "https://clipart-library.com/2023/44fc37f9acd25bb878ca0a7239a0a7c2.png",
  artist: "https://clipart-library.com/data_images/66576.jpg",
  palette:
    "https://em-content.zobj.net/thumbs/240/apple/354/artist-palette_1f3a8.png",
  pen: "https://em-content.zobj.net/thumbs/240/apple/354/pen_1f58a-fe0f.png",
  business:
    "https://clipart-library.com/images_k/silhouette-business-woman/silhouette-business-woman-5.png",
  clown:
    "https://em-content.zobj.net/thumbs/240/apple/354/clown-face_1f921.png",
  clownonball: "https://clipart-library.com/new_gallery/clown-clipart-4.jpg",
  house:
    "https://em-content.zobj.net/thumbs/240/apple/354/house-with-garden_1f3e1.png",
  "man-raising-hand":
    "https://em-content.zobj.net/thumbs/240/apple/354/man-raising-hand_1f64b-200d-2642-fe0f.png",
  "waving-hand":
    "https://em-content.zobj.net/thumbs/240/apple/354/waving-hand_1f44b.png",
  anxiety: "https://media1.tenor.com/m/wyW-1Xi_5AAAAAAC/att-miger.gif",
  fall: "https://media1.tenor.com/m/IXFm1zTO_MEAAAAC/fall-of-icarus.gif",
}

export type EmojiName = keyof typeof emojiData

type EmojiImageProps = React.ImgHTMLAttributes<HTMLImageElement> & EmojiProps

export const Emoji = ({ name, fallback, ...html }: EmojiImageProps) => {
  const url = emojiData[name]

  return url ? (
    <Image {...html} width="25px" src={url} alt={fallback} />
  ) : (
    fallback
  )
}
