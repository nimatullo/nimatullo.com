import React, { useEffect, useState } from "react"
import Book from "./Book"
import Loader from "./Loader"

const ISBN_LIST = [
  9781250301697, // Silent Patient
  9780812983586, // Kavalier and Clay
  9780767908184, // History of Everthing
  9780142437308, // Power and the Glory
  9780062316103, // Sapiens
  9781949759228, // The Mountain is You
]

const BookList = () => {
  const [booksList, setBooksList] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchBooks = async () => {
    setLoading(true)
    const bookPromises = Promise.all(
      ISBN_LIST.map(async (isbn) => {
        return fetch(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
          {
            method: "GET",
          }
        )
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            return data.items[0].volumeInfo
          })
      })
    )
    const books = await bookPromises
      .then((bookInfo) => {
        return bookInfo.map((book, index) => {
          return {
            index: index + 1,
            title: book.title,
            author: book.authors[0],
            thumbnail: book.imageLinks.smallThumbnail.replace(
              "http://",
              "https://"
            ),
          }
        })
      })
      .finally(() => setLoading(false))

    setBooksList(books)
  }

  useEffect(() => fetchBooks(), [])

  if (loading) return <Loader />

  return (
    <div className="bookList">
      {booksList.map((book) => (
        <Book key={book.index} book={book} />
      ))}
    </div>
  )
}

export default BookList
