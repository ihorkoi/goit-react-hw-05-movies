import { SearchResults } from 'components/SearchResults/SearchResults';
import { fetchMovieByQuery } from 'components/api';
import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { PageWrapper } from './Home.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovieByQuery(query).then(data => setMovies(data.results));
  }, [query]);

  const onSearch = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.elements.input.value });
    evt.target.reset();
  };

  return (
    <PageWrapper>
      <SearchBar onSearch={onSearch} />
      <SearchResults movies={movies} />
    </PageWrapper>
  );
};
export default Movies;
