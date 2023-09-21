import axios from 'axios';

// const params = new URLSearchParams({
//   api_key: '1854d4b916781afd40108f254051938e',
// });

// axios.defaults.headers['X-API-KEY'] = '1854d4b916781afd40108f254051938e';

export const fetchMovie = async movieID => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=1854d4b916781afd40108f254051938e`
  );
  return await data.json();
};

export const fetchMovieTrands = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=1854d4b916781afd40108f254051938e`
  );
  return await data.json();
};
export const fetchMovieByQuery = async query => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1854d4b916781afd40108f254051938e`
  );
  return await data.json();
};
