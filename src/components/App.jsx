import { Routes, Route } from 'react-router-dom';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { Navigation } from './Navigation/Navigation';
import { Home } from '../pages/Home';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
