import {
  MovieCardWrap,
  MovieCardTitle,
  MovieCardVote,
  MovieCardOverview,
  MovieCardLinkWrap,
  MovieCardLink,
  ButtonBack,
} from './MovieCard.styled';

import { Outlet, useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const MovieCard = ({ details }) => {
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/movies');

  const { poster_path, title, vote_average, overview, genres, runtime } =
    details;

  return (
    <div>
      <ButtonBack to={locRef.current}>Back to movies</ButtonBack>
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
      <MovieCardLinkWrap>
        <MovieCardLink to="cast">Cast</MovieCardLink>
        <MovieCardLink to="reviews">Reviews</MovieCardLink>
      </MovieCardLinkWrap>
      <Outlet />
    </div>
  );
};
