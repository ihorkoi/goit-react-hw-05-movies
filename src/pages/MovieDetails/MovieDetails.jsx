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
import Notiflix from 'notiflix';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const prevLocation = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovie(movieId)
      .then(data => setMovie(data))
      .catch(err => Notiflix.Notify.failure(err.message));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const { poster_path, original_title, vote_average, overview, genres } = movie;

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
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w300' + poster_path
                : 'https://placehold.co/200x300'
            }
            alt={original_title}
          />
        </ImgThumb>
        <div>
          <h1>{original_title}</h1>
          <p>User rating: {Math.round(vote_average * 1000) / 100}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres?.map(({ name, id }) => {
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

export default MovieDetails;
