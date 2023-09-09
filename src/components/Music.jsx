import React from "react"

// Not used
const Album = ({ album }) => {
  return (
    <div className="book">
      <h2>{album.album}</h2>
      <img src={album.coverart} alt={album.album} />
      <p>{album.artist}</p>
    </div>
  )
}

export default Album
