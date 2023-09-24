import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);
  return (
    <ul>
      {reviews.length ? (
        reviews.map(({ author, content, created_at, id }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{created_at}</p>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>There are no reviews for this film yet...</p>
      )}
    </ul>
  );
};
