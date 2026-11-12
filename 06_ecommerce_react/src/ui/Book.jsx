import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

function Book({ book }) {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img 
          className="book__image" 
          src={book.url} 
          alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="" className="book__title--link">
          {book.title}
        </a>
        <div className="book__ratings">
          {Array.from({ length: book.rating }, (_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} />
          ))}
        </div>
        <div className="book__price">
          <span className="book__price--normal">${book.originalPrice}</span>
          ${book.salePrice}
        </div>
      </div>
    </div>
  )
}

export default Book