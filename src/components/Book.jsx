import React from 'react';

const Book = ({book}) => {
    const {title, thumbnail, author} = book;
    return (
        <div className="book">
          <h2>{title}</h2>
          <img src={thumbnail} alt="Book Img" />
          <p>{author}</p>
        </div>
      );
}
 
export default Book;