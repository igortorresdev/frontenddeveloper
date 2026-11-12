import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Book from "./ui/Book";
import { books } from "../data";

function Featured() {
  const featuredBooks = books
    .filter((book) => book.rating === 5)
    .slice(0, 4);
  // console.log(featuredBooks);

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">books</span>
          </h2>
          <div className="books">
            {featuredBooks.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
