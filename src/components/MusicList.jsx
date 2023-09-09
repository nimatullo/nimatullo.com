import React from "react"
import Music from "../components/Music"
import albumList from "../constants/albumsList"

// Not used
const MusicList = () => {
  return (
    <div className="bookList">
      {albumList.map((album) => (
        <Music album={album} />
      ))}
    </div>
  )
}

export default MusicList
