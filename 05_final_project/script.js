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
  // eg. "Shingeki no Kyojin" for "進撃の巨人".

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
    }), //Search by title or year, null just return all results.
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
  let sortedAnime = [...anime]; // copy of the anime array.
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
    score.className = "anime-score";

    if (item.averageScore == null) {
      score.textContent = "Not rated";
    } else {
      const rating = item.averageScore / 20;

      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      let starsHTML = "";

      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
      }

      if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
      }

      for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
      }

      score.innerHTML = starsHTML;
      score.setAttribute("aria-label", `${rating.toFixed(1)} out of 5 stars`);
    }

    // const score = document.createElement("p");
    // score.className = "anime-score"; 
    // score.textContent =
    //   "Score: " +
    //   (item.averageScore == null ? 
    //     "Not rated" : item.averageScore + "%");

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
    // console.log(card);
  });
}

searchButton.addEventListener("click", getAnime);
sortSelect.addEventListener("change", showAnime);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") getAnime();
});

getAnime();
