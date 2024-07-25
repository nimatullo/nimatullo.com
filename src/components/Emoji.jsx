import React from "react"
import emojis from "../data/emojis.json"

const defaultStyle = {
  width: "25px",
}

const getEmojiUrl = (emojiName) => {
  const url = emojis[emojiName]

  return url || null
}

export const Emoji = ({ name, fallback, style = null }) => {
  const url = getEmojiUrl(name)

  return url ? (
    <div
      style={{
        display: "inline-block",
        ...(style || defaultStyle),
      }}
    >
      <img style={{ width: "100%" }} src={url} />
    </div>
  ) : (
    <div>{fallback}</div>
  )
}
