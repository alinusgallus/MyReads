import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {

  state = {
    books:[],
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
  }

  moveToShelf = (newShelf, bookId) => {
    var i = this.state.books.findIndex(e => e.id == bookId)
    var newBooks = this.state.books.slice()
    newBooks[i].shelf = newShelf
    this.setState({ books: newBooks})
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div>
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                      <BookShelf name="Read" bookShelf={this.state.books} shelf="read" moveToShelf={this.moveToShelf} />
                      <BookShelf name="To Read" bookShelf={this.state.books} shelf="wantToRead" moveToShelf={this.moveToShelf}/>
                      <BookShelf name="Currently Reading" bookShelf={this.state.books} shelf="currentlyReading" moveToShelf={this.moveToShelf} />
                    </div>
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
        </div>)
  }
}

export default BooksApp
