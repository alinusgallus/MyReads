import React from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'


function Book(props){
  var imageURL = 'url('+props.thumbnail+')'
  return(

    <li key={props.bookId}>
      <div className="book" >
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: imageURL }}></div>
          <ChangeShelf currentShelf={props.shelf} bookId={props.bookId} moveToShelf={props.moveToShelf} />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
    authors: PropTypes.string.isRequired,
    bookId: PropTypes.string.isRequired,
    moveToShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Book
