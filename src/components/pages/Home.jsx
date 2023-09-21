import { fetchMovieTrands } from 'components/api';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    fetchMovieTrands().then(data => console.log(data));
  }, []);
  return <div>HOME</div>;
};
