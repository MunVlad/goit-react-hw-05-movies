async function fetchTrendingMovies() {
  return await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=6dae3b5437a0148dbe5d61c3832fc6ad'
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

async function fetchMovieById(movie_id, queryType = '') {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}${queryType}?api_key=6dae3b5437a0148dbe5d61c3832fc6ad`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

async function fetchMovieOnQuery(query) {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6dae3b5437a0148dbe5d61c3832fc6ad&query=${query}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

const moviesApi = { fetchTrendingMovies, fetchMovieById, fetchMovieOnQuery };

export default moviesApi;
