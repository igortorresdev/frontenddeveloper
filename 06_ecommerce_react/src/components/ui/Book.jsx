import React from "react";
import StarRating from "../StarRating";

function Book({ book }) {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img className="book__image" src={book.url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="" className="book__title--link">
          {book.title}
        </a>

        <StarRating rating={book.rating} />

        <div className="book__price">
          {book.salePrice ? (
            <>
              <span className="book__price--normal">
                ${book.originalPrice.toFixed(2)}
              </span>
              ${book.salePrice.toFixed(2)}
            </>
          ) : (
            <>${book.originalPrice.toFixed(2)}</>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book;
