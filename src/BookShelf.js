import React, { Component } from 'react'
import Book from './Book'

function BookShelf(props){

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.name}</h2>
        <div className="bookshelf-books">
              <ol className="books-grid">
            {props.bookShelf.filter((b) => b.shelf === props.shelf).map(book =>
              <Book bookId={book.id} title={book.title} thumbnail={book.imageLinks.smallThumbnail} authors={book.authors[0]} shelf={book.shelf} moveToShelf={props.moveToShelf} />
            )}
              </ol>
        </div>
      </div>
  )
}


export default BookShelf
