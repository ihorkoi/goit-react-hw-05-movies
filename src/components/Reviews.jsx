import { useEffect, useState } from 'react';
import { fetchMovieReviews } from './api';
import { Link, useParams } from 'react-router-dom';

export const Reviews = () => {
  const params = useParams();
  const { movieId } = params;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);
  return (
    <ul>
      {reviews.map(({ author, content, created_at, id }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{created_at}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
