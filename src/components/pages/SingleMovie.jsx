import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'components/api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleMovie = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const prevLocation = location.state?.from ?? '/';

  const generateMovieMarckup = movie => {
    if (!movie) {
      return;
    }
    return (
      <div>
        <Link to={prevLocation}>Back</Link>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>{movie.original_title}</h1>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p></p>
        </div>
      </div>
    );
  };
  // params.movieId;
  useEffect(() => {
    fetchMovie(params.movieId)
      .then(data => setMovie(data))
      .catch(err => console.log(err));
  }, [params.movieId]);

  return <div>{generateMovieMarckup(movie)}</div>;
};

export default SingleMovie;
