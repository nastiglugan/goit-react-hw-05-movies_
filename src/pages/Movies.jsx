import { useState, useEffect } from 'react';
import { SeachForm } from '../components/SeachForm/SeachForm';
import * as GetMovies from '../components/api';
// import { MovieTrendingCard } from '../components/MovieTrendingCart/MovieTrendingCart';
import { MoviesList } from '../components/MovieList/MovieList';

export const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [fetchMovies, setFetchApi] = useState([]);

  const forFormSubmit = name => {
    setMovieName(name);
    console.log(movieName);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    GetMovies.fetchSeachMovie(movieName).then(data => setFetchApi(data));
  }, [movieName]);

  console.log(fetchMovies);

  return (
    <div>
      <SeachForm onSubmit={forFormSubmit}></SeachForm>
      <ul>
        <MoviesList movies={fetchMovies}></MoviesList>
      </ul>
    </div>
  );
};
