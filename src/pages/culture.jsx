import React from "react"
import Helmet from "react-helmet"
import BookList from "../components/BookList"
import Hoarder from "../components/Hoarder"
import Nav from "../components/Nav"
import PageIntro from "../components/PageIntro"
import Playlist from "../components/Playlists"
import SocialMediaNav from "../components/SocialMediaNav"
import "../styles/books.css"

const Books = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Culture</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>"
        />
      </Helmet>
      <Nav />
      <div className="container">
        <PageIntro header={"Links"} text={"Link hoarding"} />
        <Hoarder />
        <PageIntro header={"Books"} text={"List of books I recommend"} />
        <BookList />
        <PageIntro header={"Music"} text="My playlists" />
        <Playlist />
      </div>
      <SocialMediaNav />
    </>
  )
}

export default Books
