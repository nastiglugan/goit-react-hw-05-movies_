import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as getMovieDetails from '../components/api';
import { MovieCard } from '../components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails.fetchMovieDetails(movieId).then(data => setFilm(data));
  }, [movieId]);

  return <div>{film !== null && <MovieCard details={film}></MovieCard>}</div>;
};
export default MovieDetails;
