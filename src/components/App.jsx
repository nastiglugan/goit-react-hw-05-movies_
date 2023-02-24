import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
// import { NotFound } from '../pages/NotFound';
// import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      {/* <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
