import { Link } from 'react-router-dom';

export const SearchResults = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
