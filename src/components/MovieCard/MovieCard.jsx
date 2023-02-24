import {
  MovieCardWrap,
  MovieCardTitle,
  MovieCardVote,
  MovieCardOverview,
} from './MovieCard.styled';

import { NavLink, Outlet } from 'react-router-dom';

export const MovieCard = ({ details }) => {
  const { poster_path, title, vote_average, overview, genres, runtime } =
    details;

  return (
    <div>
      {' '}
      <MovieCardWrap>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="470"
            height="600"
          />
        </div>
        <div>
          <MovieCardTitle> {title}</MovieCardTitle>
          <MovieCardVote>Vote average: {vote_average}</MovieCardVote>
          <MovieCardOverview>Overview: {overview}</MovieCardOverview>
          <ul>
            Genres:
            {genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          <p>Runtime: {runtime} min</p>
        </div>
      </MovieCardWrap>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
