import React from 'react'
import PropTypes from 'prop-types'

function ChangeShelf(props){
  const shelves={"currentlyReading": "Currently Reading", "wantToRead": "Want to read", "read": "Read"}
   return(
     <div className="book-shelf-changer">
     <select value={props.currentShelf} onChange={(e)=> props.moveToShelf(e.target.value,props.bookId)} >
        {
          Object.keys(shelves).map(function(key){
            return(<option key={key} value={key}>{shelves[key]}</option>)
          })
        }
       </select>

      </div>
   )
}

export default ChangeShelf

ChangeShelf.propTypes = {
    currentShelf: PropTypes.string.isRequired,
    bookId: PropTypes.string.isRequired,
    moveToShelf: PropTypes.func.isRequired,
}
