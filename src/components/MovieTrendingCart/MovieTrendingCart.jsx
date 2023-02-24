// import { NavLink } from 'react-router-dom';
import {
  MovieTrendingCover,
  MovieTrendingItems,
  MovieTrendingImg,
  MovieTrendingLink,
  MovieTrendingVote,
  MovieTrendingTitle,
} from './MovieTrendingCart.styled';
import { useLocation } from 'react-router-dom';

export const MovieTrendingCard = ({ movie }) => {
  const { poster_path, id, title, vote_average } = movie;
  return (
    <MovieTrendingCover>
      <MovieTrendingItems>
        <MovieTrendingLink to={`/movies/${id}`}>
          <MovieTrendingImg
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="300"
            height="400"
          />
          <MovieTrendingTitle>
            <p>{title}</p>
            <MovieTrendingVote vote={vote_average}>
              {vote_average}
            </MovieTrendingVote>
          </MovieTrendingTitle>
        </MovieTrendingLink>
      </MovieTrendingItems>
    </MovieTrendingCover>
  );
};
