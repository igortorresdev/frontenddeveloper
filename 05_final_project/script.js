let anime = [];
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const sortSelect = document.getElementById("sort");
const animeList = document.getElementById("animeList");
const message = document.getElementById("message");

function getAnime() {
  const search = searchInput.value.trim();
  message.textContent = "Loading anime...";
  animeList.innerHTML = "";

  // AniList uses GraphQL. 20 titles per page are requested.
  // romaji is Japanese written using the Latin alphabet.

  const query = `
  query ($search: String, $genre: String, $year: FuzzyDateInt) {
    Page(page: 1, perPage: 20) {
      media(
        type: ANIME
        search: $search
        genre: $genre
        startDate_greater: $year
        sort: SCORE_DESC
      ) {
        id
        title { romaji }
        coverImage { large }
        startDate { year }
        genres
        averageScore
        popularity
      }
    }
  }`;

  fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: { search: search || null },
    }), //Search by title, genre or year, null just return all results.
  })
    .then((response) => {
      if (!response.ok) throw new Error("API status: " + response.status);
      return response.json();
    })
    .then((result) => {
      if (result.errors) throw new Error(result.errors[0].message);
      anime = result.data.Page.media;
      showAnime();
    })
    .catch((error) => {
      console.log(error);
      message.textContent = "Could not load anime: " + error.message;
    });
}

function showAnime() {
  let sortedAnime = [...anime];
  const sort = sortSelect.value;

  if (sort === "sort_az") {
    sortedAnime.sort((a, b) => a.title.romaji.localeCompare(b.title.romaji));
  } else if (sort === "sort_za") {
    sortedAnime.sort((a, b) => b.title.romaji.localeCompare(a.title.romaji));
  } else if (sort === "sort_newest") {
    sortedAnime.sort(
      (a, b) => (b.startDate.year || 0) - (a.startDate.year || 0),
    );
  } else if (sort === "sort_oldest") {
    sortedAnime.sort(
      (a, b) => (a.startDate.year || 9999) - (b.startDate.year || 9999),
    );
  }

  animeList.innerHTML = "";
  message.textContent = sortedAnime.length
    ? sortedAnime.length + " anime found" : "No anime found.";

  sortedAnime.forEach((item) => {
    const card = document.createElement("article");
    card.className = "anime-card";

    const image = document.createElement("img");
    image.src = item.coverImage.large || "";
    image.alt = item.title.romaji;

    const title = document.createElement("h3");
    title.textContent = item.title.romaji;

    const genre = document.createElement("p");
    genre.textContent =
      "Genres: " + item.genres.join(", ");

    const year = document.createElement("p");
    year.textContent = "Year: " + (item.startDate.year || "Unknown");

    const score = document.createElement("p");
    score.textContent =
      "Score: " +
      (item.averageScore == null ? 
        "Not rated" : item.averageScore + "%");

    // const popularity = document.createElement("p");
    // popularity.textContent =
    //   "Popularity: " +
    //   (item.popularity == null ? "Not available" : item.popularity);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(year);
    card.appendChild(score);
      // card.appendChild(popularity);
    animeList.appendChild(card);
  });
}

searchButton.addEventListener("click", getAnime);
sortSelect.addEventListener("change", showAnime);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") getAnime();
});

getAnime();
