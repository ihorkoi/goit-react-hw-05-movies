import { useEffect, useState, Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { fetchMovie } from 'components/api';
import {
  PageWrapper,
  ImgThumb,
  Container,
  BackButton,
  Genres,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const prevLocation = location.state?.from ?? '/';

  const generateMovieMarckup = movie => {
    if (!movie) {
      return;
    }
    return (
      <Container>
        <Link
          to={prevLocation}
          style={{
            color: '#545e6f',
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          <BackButton>
            <BiArrowBack />
            <span>Go back</span>
          </BackButton>
        </Link>
        <PageWrapper>
          <ImgThumb>
            <img
              src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              alt="movie.original_title"
            />
          </ImgThumb>
          <div>
            <h1>{movie.original_title}</h1>
            <p>User rating: {Math.round(movie.vote_average * 1000) / 100}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movie.genres?.map(({ name, id }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </div>
        </PageWrapper>
        <p>Additional information</p>

        <Genres>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </Genres>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    );
  };
  useEffect(() => {
    fetchMovie(params.movieId)
      .then(data => setMovie(data))
      .catch(err => console.log(err));
  }, [params.movieId]);

  return <div>{generateMovieMarckup(movie)}</div>;
};

export default MovieDetails;