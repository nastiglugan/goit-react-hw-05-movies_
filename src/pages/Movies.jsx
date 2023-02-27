import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SeachForm } from '../components/SeachForm/SeachForm';
import * as GetMovies from '../components/api';
// import { MovieTrendingCard } from '../components/MovieTrendingCart/MovieTrendingCart';
import { MoviesList } from '../components/MovieList/MovieList';

const Movies = () => {
  const [movieName, setMovieName] = useState([]);
  const [error, setError] = useState(null);
  const [fetchMovies, setFetchMovies] = useSearchParams();
  const nameFilm = fetchMovies.get('name') || '';

  const forFormSubmit = name => {
    setFetchMovies({ name: name });
  };

  useEffect(() => {
    if (nameFilm === '') {
      return;
    }
    GetMovies.fetchSeachMovie(nameFilm)
      .then(data => {
        if (!data.length) {
          throw new Error();
        }
        setMovieName(data);
      })
      .catch(error => {
        setError({ error });
      });
  }, [nameFilm]);

  return (
    <div>
      <SeachForm onSubmit={forFormSubmit}></SeachForm>
      {error && <p>Щось пішло не так. Оновіть сторінку.</p>}
      <ul>{movieName && <MoviesList movies={movieName}></MoviesList>}</ul>
    </div>
  );
};
export default Movies;
