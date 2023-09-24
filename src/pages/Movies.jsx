import { fetchMovieByQuery } from 'components/api';
import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { PageWrapper } from './Home/Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovieByQuery(query)
      .then(data => setMovies(data.results))
      .catch(err => Notiflix.Notify.failure(err.message));
  }, [query]);

  const onSearch = query => {
    setSearchParams({ query: query });
  };

  return (
    <PageWrapper>
      <SearchBar onSearch={onSearch} />
      <MoviesList movies={movies} />
    </PageWrapper>
  );
};
export default Movies;
