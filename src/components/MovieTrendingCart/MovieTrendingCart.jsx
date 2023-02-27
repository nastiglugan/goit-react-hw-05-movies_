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
import PropTypes from 'prop-types';

export const MovieTrendingCard = ({ movie }) => {
  const location = useLocation();

  const { poster_path, id, title, vote_average } = movie;

  const srcImg =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://fomantic-ui.com/images/wireframe/image.png';
  return (
    <MovieTrendingCover>
      <MovieTrendingItems>
        <MovieTrendingLink to={`/movies/${id}`} state={{ from: location }}>
          <MovieTrendingImg src={srcImg} alt={title} width="300" height="400" />

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

MovieTrendingCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
