import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const BookList = () => {
  const [booksList, setBooksList] = useState([]);
  let listId = 1;
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
    ISBN_LIST.map((isbn) => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => data.items[0].volumeInfo)
        .then((bookInfo) => {
          const book = {
            index: listId++,
            title: bookInfo.title,
            author: bookInfo.authors[0],
            thumbnail: bookInfo.imageLinks.smallThumbnail.replace(
              "http://",
              "https://"
            ),
          };
          setBooksList((booksList) => [...booksList, book]);
        })
        .catch((err) => console.log(err));
    });
  }, []);
  return (
    <div className="bookList">
      {booksList.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};

export default BookList;
