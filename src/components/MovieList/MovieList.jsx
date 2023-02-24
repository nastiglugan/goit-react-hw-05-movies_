// import { NavLink } from 'react-router-dom';
import { MovieTrendingCard } from '../MovieTrendingCart/MovieTrendingCart';
import { MovieTrendingList } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <MovieTrendingList>
        {movies.map(movie => {
          return (
            <MovieTrendingCard key={movie.id} movie={movie}>
              {/* <NavLink to={`/movies/${movie.id}`}></NavLink> */}
            </MovieTrendingCard>
          );
        })}
      </MovieTrendingList>
    </div>
  );
};
