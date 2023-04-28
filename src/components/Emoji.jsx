import React from "react"
import emojis from "../data/emojis.json"

const defaultStyle = {
  "width": "25px"
}


const getEmojiUrl = (emojiName) => {
  const url = emojis[emojiName]

  return url || null
}


export const Emoji = ({
  name,
  fallback,
  style = null,
}) => {

  const url = getEmojiUrl(name)

  return url ? (
    <img 
      src={url}
      style={style || defaultStyle}
      />
  ) : (
    <div>{fallback}</div>
  )
}