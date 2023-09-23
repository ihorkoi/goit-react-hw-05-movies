import { useLocation, Link } from 'react-router-dom';
import {
  ImgThumb,
  ResultsList,
  ResultslistItem,
} from './SearchResults.styled.js';

export const SearchResults = ({ movies }) => {
  const location = useLocation();
  return (
    <ResultsList>
      {movies.map(({ id, poster_path, original_title }) => {
        return (
          <ResultslistItem key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <ImgThumb>
                <img
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w300' + poster_path
                      : 'https://placehold.co/200x300'
                  }
                  alt={original_title}
                />
              </ImgThumb>
            </Link>
          </ResultslistItem>
        );
      })}
    </ResultsList>
  );
};
