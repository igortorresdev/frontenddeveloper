import React, { useState }  from 'react'
import Book from '../components/ui/Book'

function Books({ books : initialBooks }) {
  const [books, setBooks] = useState(initialBooks);
  console.log(books)

  function sort(sortSelected) {
    const value = sortSelected.target.value;
    const sortedBooks = [...books];
    if (value === 'priceasc') {
      sortedBooks.sort(
        (a, b) => 
          (a.salePrice ?? a.originalPrice) - 
          (b.salePrice ?? b.originalPrice));
    } else if (value === 'pricedesc') {
      sortedBooks.sort(
        (a, b) => 
          (b.salePrice ?? b.originalPrice) - 
          (a.salePrice ?? a.originalPrice));
    } else if (value === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }
    setBooks(sortedBooks);
  }

  return (
    <div className="books__body">
      <main className="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue="default" onChange={sort}>
                  <option value="default" disabled>Sort</option>
                  <option value="priceasc">Price, Low to High</option>
                  <option value="pricedesc">Price, High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => <Book book={book} key={book.id} />)}
              </div>
            </div>
          </div>  
        </section>
      </main>
    </div>
  )
}

export default Books

