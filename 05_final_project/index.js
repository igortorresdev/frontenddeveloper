// Displaying the main content of the final project page

function displayAnimeList(anime) {
  const animeList = anime.map((anime) => {
    const poster = anime.Poster !== 'N/A' ? anime.Poster: '';

  return `
    <div class="anime0-card">
      ${poster ? `<img class="anime-card__img" src="${poster}" alt="${anime.Title}">` : 
        `<div class="anime-card__placeholder">No Image Available</div>`}
      <h2>${anime.Title}</h2>
      <p>${anime.Plot}</p>
    </div>
    `;
}).join('');