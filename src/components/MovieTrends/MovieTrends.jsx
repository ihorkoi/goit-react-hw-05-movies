import { Link } from 'react-router-dom';

export const MovieTrends = ({ movies }) => {
  return (
    <>
      <h1>Trending</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                {movie.original_title ? movie.original_title : movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
