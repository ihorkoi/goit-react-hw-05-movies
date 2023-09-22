import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const SearchResults = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
