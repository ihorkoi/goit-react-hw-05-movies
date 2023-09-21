import { MovieTrends } from 'components/MovieTrends/MovieTrends';
import { fetchMovieTrends } from 'components/api';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [trands, setTrands] = useState([]);

  useEffect(() => {
    fetchMovieTrends().then(data => setTrands(data.results));
  }, []);

  return (
    <div>
      <MovieTrends movies={trands} />
    </div>
  );
};
