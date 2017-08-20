import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'

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
    const i = this.state.books.findIndex(e => e.id === bookId)
    let newBooks = this.state.books.slice()
    newBooks[i].shelf = newShelf
    this.setState({ books: newBooks})
    BooksAPI.update(newBooks[i],newShelf)
  }

  render() {
      return (
        <div className="app">
              <Route path='/search' render={(props)=>(
                  <Search books={this.state.books} moveToShelf={this.moveToShelf}/>
              )}/>
              <Route exact path='/' render={()=>(
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
                            <Link to='/search' >Add a book</Link>
                        </div>
                    </div>
                )}/>
        </div>
    )
  }
}

export default BooksApp
