import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../api';
import { useParams } from 'react-router-dom';
import { CastGallery, CastDescription } from './Cast.styled';

export const Cast = () => {
  const params = useParams();
  const { movieId } = params;
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);
  return (
    <CastGallery>
      {cast.map(({ character, id, original_name, profile_path }) => {
        return (
          <li key={id}>
            <div>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w200' + profile_path
                    : 'https://placehold.co/200x300'
                }
                alt={original_name}
              />
            </div>
            <CastDescription>
              <p>{original_name} </p>
              <p>Character: {character}</p>
            </CastDescription>
          </li>
        );
      })}
    </CastGallery>
  );
};
