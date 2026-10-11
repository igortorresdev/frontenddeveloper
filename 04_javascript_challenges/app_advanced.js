function showRating(rating) {
    let stars = '';
    for (let i = 1; i <= rating; i++) {
        stars += '★';
    }
    if (!Number.isInteger(rating)) {
        stars += '⯪';
    }
    while (stars.length < 5) {
        stars += '☆';
    }
    return stars;
}

console.log(showRating(1.5)); // Output: ★⯪☆☆☆
console.log(showRating(3.5)); // Output: ★★★⯪☆
console.log(showRating(4.5)); // Output: ★★★★⯪

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortLowToHigh([3, 1, 4, 1, 5])); // Output: [1, 1, 3, 4, 5]

function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);

}

console.log(sortHighToLow([
  { id: 1, price: 10 },
  { id: 2, price: 5 },
  { id: 3, price: 15 }
])); // Output: [{ id: 3, price: 15 }, { id: 1, price: 10 }, { id: 2, price: 5 }]

async function postsByUser(userId){
  // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  //   .then(response => response.json())
  //   .then(posts => {
  //     console.log(`Posts by user ${userId}:`);
  //     posts.forEach(post => console.log(`- ${post.title}`));
  //   });

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  const posts = result.filter(post => post.userId === userId);
  console.log(posts);
  
}

postsByUser(4);

async function firstSixIncomplete() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  const incomplete = result.filter(todo => !todo.completed);
  console.log(incomplete.slice(0, 6));
}

firstSixIncomplete();
