import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'
import PropTypes from 'prop-types'


class Search extends Component{

    state = {
        query:''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    render(){
        let showingBooks = []
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => match.test(book.title))
        } else {
            showingBooks = []
        }

        return(
            <div>
                <div className="search-books-bar">
                    <Link className="close-search" to='/' >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                          type="text"
                          placeholder="Search by title or author"
                          value={this.state.query}
                          onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {showingBooks.map(book =>
                                <Book
                                  key={book.id}
                                  bookId={book.id}
                                  title={book.title}
                                  thumbnail={book.imageLinks.smallThumbnail}
                                  authors={book.authors[0]}
                                  shelf={book.shelf}
                                  moveToShelf={this.props.moveToShelf}
                                 />
                            )}
                        </ol>
                    </div>
                </div>
              </div>
          )
      }
}

Search.PropTypes = {
    books: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired,
}

export default Search
