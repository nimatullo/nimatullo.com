import React from "react"
import Nav from "../components/Nav"
import { useEffect } from "react"
import { useState } from "react"
import "../styles/books.css"
import SocialMediaNav from "../components/SocialMediaNav"

const Books = () => {
  const [isLoading, setLoading] = useState(true)
  const isbnList = [
    9781250301697,
    9780812983586,
    9781591841661,
    9780767908184,
    9780143107552,
    9780062457738,
    9780142437308,
  ]
  const [booksList, setBooksList] = useState([])
  useEffect(() => {
    setTimeout(() => {
      isbnList.map(isbn => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, {
          method: "GET",
        })
          .then(res => {
            return res.json()
          })
          .then(data => data.items[0].volumeInfo)
          .then(bookInfo => {
            const book = {
              title: bookInfo.title,
              author: bookInfo.authors[0],
              img: bookInfo.imageLinks.smallThumbnail,
            }
            setBooksList(booksList => [...booksList, book])
          })
          .catch(err => console.log(err))
          .finally(setLoading(false))
      })
    }, 1000)
  }, [])
  const content = () => {
    if (isLoading) {
      return (
        <div className="container loadingIndicator">
          <h1>Loading...</h1>
        </div>
      )
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
      )
    }
  }
  return (
    <>
      <Nav />
      {content()}
      <SocialMediaNav />
    </>
  )
}

export default Books
