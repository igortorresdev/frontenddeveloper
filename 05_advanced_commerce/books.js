async function renderBooks() {
  const booksWrapper = document.querySelector('.books');
  const books = await getBooks();
  
  const booksHTML = books.map(book => {
    return `
    <div class="book">
      <figure class="book__img--wrapper">
        <img src="${book.url}" alt="" class="book__title">
      </figure>
      <div class="book__title">
        ${book.title}
      </div>
      <div class="book__ratings">
        ${getRatingStars(book.rating)}
      </div>
      <div class="book__price">
        <span class="book__price--normal">$${book.originalPrice.toFixed(2)}</span> $${book.salePrice}  
      </div>
    </div>`
  }).join('');
  booksWrapper.innerHTML = booksHTML;

}

setTimeout(() => {
  renderBooks();
});

function filterBooks() {
  const filter = document.getElementById('filter').value;
  const booksWrapper = document.querySelector('.books');
  getBooks().then(books => {
    let filteredBooks = [...books];
    if (filter === 'Low_To_High') {
      filteredBooks.sort((a, b) => a.salePrice - b.salePrice);
    } else if (filter === 'High_To_Low') {
      filteredBooks.sort((a, b) => b.salePrice - a.salePrice);
    } else if (filter === 'Discounted') {
      filteredBooks = filteredBooks.filter(book => book.salePrice !== null);
    } else if (filter === 'Rating') {
      filteredBooks.sort((a, b) => b.rating - a.rating);
    }

    const booksHTML = filteredBooks.map(book => {
      return `<div class="book">
      <figure class="book__img--wrapper">
        <img src="${book.url}" alt="" class="book__title">
      </figure>
      <div class="book__title">
        ${book.title}
      </div>
      <div class="book__ratings">
        ${getRatingStars(book.rating)}
      </div>
      <div class="book__price">
        <span class="book__price--normal">$${book.originalPrice.toFixed(2)}</span> $${book.salePrice}  
      </div>
    </div>`;
    }).join('');
    booksWrapper.innerHTML = booksHTML;
  });
}

function getRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = '';
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="fa-regular fa-star"></i>';
  }
  return starsHTML;
}


// FAKE DATA 
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Crack the Coding Interview",
          url: "assets/crack the coding interview.png",
          originalPrice: 49.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atomic Habits",
          url: "assets/atomic habits.jpg",
          originalPrice: 39,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "Deep Work",
          url: "assets/deep work.jpeg",
          originalPrice: 29,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "The 10X Rule",
          url: "assets/book-1.jpeg",
          originalPrice: 44,
          salePrice: 19,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Be Obsessed Or Be Average",
          url: "assets/book-2.jpeg",
          originalPrice: 32,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "Rich Dad Poor Dad",
          url: "assets/book-3.jpeg",
          originalPrice: 70,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Cashflow Quadrant",
          url: "assets/book-4.jpeg",
          originalPrice: 11,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "48 Laws of Power",
          url: "assets/book-5.jpeg",
          originalPrice: 38,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "The 5 Second Rule",
          url: "assets/book-6.jpeg",
          originalPrice: 35,
          salePrice: null,
          rating: 2,
        },
        {
          id: 10,
          title: "Your Next Five Moves",
          url: "assets/book-7.jpg",
          originalPrice: 40,
          salePrice: null,
          rating: 4,
        },
        {
          id: 11,
          title: "Mastery",
          url: "assets/book-8.jpeg",
          originalPrice: 30,
          salePrice: null,
          rating: 4.5,
        },
      ]);
    }, 1000);
  });
}

getBooks();