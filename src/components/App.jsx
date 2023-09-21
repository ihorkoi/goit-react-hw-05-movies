import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import { Layout } from './Layout';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/movies/:movieId" element={<SingleMovie />}></Route>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>}></Route>
          <Route
            path="/movies/:movieId/reviews"
            element={<div>Reviews</div>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};
