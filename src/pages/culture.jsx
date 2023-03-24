import React from "react";
import Nav from "../components/Nav";
import "../styles/books.css";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";
import BookList from "../components/BookList";
import Playlist from "../components/Playlists";
import Hoarder from "../components/Hoarder";

import { useInView, motion } from "framer-motion";

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
  );
};

export default Books;
