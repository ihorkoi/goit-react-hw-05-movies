const API_KEY = '1854d4b916781afd40108f254051938e';
const BASE = 'https://api.themoviedb.org/3/';

export const fetchMovie = async movieID => {
  const data = await fetch(`${BASE}movie/${movieID}?api_key=${API_KEY}`);
  return await data.json();
};
export const fetchMovieCredits = async movieID => {
  const data = await fetch(
    `${BASE}movie/${movieID}/credits?api_key=${API_KEY}`
  );
  return await data.json();
};
export const fetchMovieReviews = async movieID => {
  const data = await fetch(
    `${BASE}movie/${movieID}/reviews?api_key=${API_KEY}`
  );
  return await data.json();
};

export const fetchMovieTrends = async () => {
  const data = await fetch(`${BASE}trending/all/day?api_key=${API_KEY}`);
  return await data.json();
};
export const fetchMovieByQuery = async query => {
  const data = await fetch(
    `${BASE}search/movie?query=${query}&api_key=${API_KEY}`
  );
  return await data.json();
};
