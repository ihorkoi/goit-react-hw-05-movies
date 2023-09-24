import { fetchMovieTrends } from 'components/api';
import { useEffect, useState } from 'react';
import { PageWrapper } from './Home.styled';
import { MoviesList } from '../../components/MoviesList/MoviesList.jsx';
import Notiflix from 'notiflix';

export const Home = () => {
  const [trands, setTrands] = useState([]);

  useEffect(() => {
    fetchMovieTrends()
      .then(data => setTrands(data.results))
      .catch(err => Notiflix.Notify.failure(err.message));
  }, []);

  return (
    <PageWrapper>
      <MoviesList movies={trands} />
    </PageWrapper>
  );
};
