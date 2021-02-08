import React from "react";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/books.css";
import SocialMediaNav from "../components/SocialMediaNav";
import Helmet from "react-helmet";

const Books = () => {
  const [isLoading, setLoading] = useState(true);
  const [booksList, setBooksList] = useState([]);
  const ISBN_LIST = [
    9781501135927, // Shoe Dog
    9781250301697, // Silent Patient
    9780812983586, // Kavalier and Clay
    9781591841661, // The Dip
    9780767908184, // History of Everthing
    9780062457738, // Subtle Art
    9780142437308, // Power and the Glory
    9780062316103, // Sapiens
  ];
  useEffect(() => {
    ISBN_LIST.map(isbn => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, {
        method: "GET"
      })
        .then(res => {
          return res.json();
        })
        .then(data => data.items[0].volumeInfo)
        .then(bookInfo => {
          const book = {
            title: bookInfo.title,
            author: bookInfo.authors[0],
            img: bookInfo.imageLinks.smallThumbnail.replace('http://', 'https://')
          };
          setBooksList(booksList => [...booksList, book]);
        })
        .catch(err => console.log(err))
        .finally(setLoading(false));
    });
  }, []);
  const content = () => {
    if (isLoading) {
      return (
        <div className="container loadingIndicator">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="intro">
            <h2>Books</h2>
            <p>A list of books I recommend.</p>
          </div>
          <div className="bookList">
            {booksList.map(book => (
              <div className="book">
                <h2>{book.title}</h2>
                <img src={book.img} alt="Book Img" />
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sherzod Nimatullo | Books</title>
      </Helmet>
      <Nav />
      {content()}
      <SocialMediaNav />
    </>
  );
};

export default Books;
