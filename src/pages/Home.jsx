import * as GetTrendingMovies from 'components/api';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MovieList/MovieList';
import { MovieListTitle } from '../components/MovieList/MovieList.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetTrendingMovies.fetchTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <div>
      <MovieListTitle>Trending Movies</MovieListTitle>
      <MoviesList movies={movies} />;
    </div>
  );
};

export default Home;
