import React from "react";
import Nav from "../components/Nav";
import "../styles/books.css";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";
import PageIntro from "../components/PageIntro";
import BookList from "../components/BookList";

const Books = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Books</title>
      </Helmet>
      <Nav />
        <div className="container">
          <PageIntro header={"Book"} text={"List of books I recommend"} />
          <BookList/>
        </div>
      <SocialMediaNav />
    </>
  );
};

export default Books;
