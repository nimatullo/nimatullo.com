import React from "react";
import Nav from "../components/Nav";
import "../styles/books.css";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";
import BookList from "../components/BookList";
import Playlist from "../components/Playlists";

const Books = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Culture</title>
      </Helmet>
      <Nav />
      <div className="container">
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
