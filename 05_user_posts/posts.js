// Read the userId from the page URL
const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');

// Get posts that belong to this user
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
      postsContainer.innerHTML += `
        <div class="card">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
    });
  })
  .catch(error => {
    console.log(error);
    document.getElementById('posts').textContent = 'Could not load posts.';
  });
