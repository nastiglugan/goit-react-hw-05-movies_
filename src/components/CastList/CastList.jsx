import PropTypes from 'prop-types';
import { CardListWrap, CardListItem, CardListImg } from './CastList.styled';
import { nanoid } from 'nanoid';

export const CastList = ({ actors }) => {
  const { cast } = actors;
  return (
    <CardListWrap>
      {cast.map(actor => {
        const srcImg =
          actor.profile_path !== null
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1084px-Unknown_person.jpg';
        return (
          <CardListItem key={nanoid()}>
            <CardListImg
              src={srcImg}
              alt={actor.name}
              width="160"
              height="200"
            />

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
