import { MovieTrends } from 'components/MovieTrends/MovieTrends';
import { fetchMovieTrends } from 'components/api';
import { useEffect, useState } from 'react';
import { PageWrapper } from './Home.styled';

export const Home = () => {
  const [trands, setTrands] = useState([]);

  useEffect(() => {
    fetchMovieTrends().then(data => setTrands(data.results));
  }, []);

  return (
    <PageWrapper>
      <MovieTrends movies={trands} />
    </PageWrapper>
  );
};
