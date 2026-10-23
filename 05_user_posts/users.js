// Get the users from the API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const usersContainer = document.getElementById('users');

    // Create one card for each user
    users.forEach(user => {
      usersContainer.innerHTML += `
        <a class="card" href="posts.html?userId=${user.id}">
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>City: ${user.address.city}</p>
          <p>See posts →</p>
        </a>
      `;
    });
  })
  .catch(error => {
    console.log(error);
    document.getElementById('users').textContent = 'Could not load users.';
  });
