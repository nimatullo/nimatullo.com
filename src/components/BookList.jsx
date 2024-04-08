import React, { useEffect, useState } from "react"
import Book from "./Book"
import Loader from "./Loader"

const BookList = () => {
  const [booksList, setBooksList] = useState([])
  const [loading, setLoading] = useState(false)
  let listId = 1
  const ISBN_LIST = [
    9781501135927, // Shoe Dog
    9781250301697, // Silent Patient
    9780812983586, // Kavalier and Clay
    9781591841661, // The Dip
    9780767908184, // History of Everthing
    9780142437308, // Power and the Glory
    9780062316103, // Sapiens
    9781451648539, // Steve Jobs
    9781949759228, // The Mountain is You
  ]
  useEffect(() => {
    setLoading(true)
    ISBN_LIST.map((isbn) => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, {
        method: "GET",
      })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          return data.items[0].volumeInfo
        })
        .then((bookInfo) => {
          const book = {
            index: listId++,
            title: bookInfo.title,
            author: bookInfo.authors[0],
            thumbnail: bookInfo.imageLinks.smallThumbnail.replace(
              "http://",
              "https://"
            ),
          }
          setBooksList((booksList) => [...booksList, book])
        })
      setLoading(false)
    })
  }, [])
  return loading ? (
    <Loader />
  ) : (
    <div className="bookList">
      {booksList.map((book) => (
        <Book key={book.index} book={book} />
      ))}
    </div>
  )
}

export default BookList
