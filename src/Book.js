import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'


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


export default Book
