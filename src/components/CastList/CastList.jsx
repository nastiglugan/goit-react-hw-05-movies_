import PropTypes from 'prop-types';
import { CardListWrap, CardListItem, CardListImg } from './CastList.styled';

export const CastList = ({ actors }) => {
  const { cast } = actors;
  return (
    <CardListWrap>
      {cast.map(actor => {
        return (
          <CardListItem key={actor.id}>
            {actor.profile_path !== null ? (
              <CardListImg
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width="160"
                height="200"
              />
            ) : (
              <CardListImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1084px-Unknown_person.jpg"
                // src="../../img/Unknown_person.jpg"
                alt={actor.name}
                width="160"
                height="200"
              />
            )}

            <p>{actor.name}</p>
          </CardListItem>
        );
      })}
    </CardListWrap>
  );
};

CastList.propTypes = {
  actors: PropTypes.object.isRequired,
};
