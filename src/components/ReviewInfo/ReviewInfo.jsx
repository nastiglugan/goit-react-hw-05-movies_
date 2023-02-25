import { NoReviews } from './ReviewInfo.styled';
import PropTypes from 'prop-types';

export const ReviewInfo = ({ info }) => {
  const { results } = info;
  return (
    <div>
      <ul>
        {results.map(result => {
          return (
            <li key={result.id}>
              <p>{result.author}</p>
              <p>{result.content}</p>
            </li>
          );
        })}
      </ul>
      {results.length === 0 && (
        <NoReviews>This movie hasn't reviews yet</NoReviews>
      )}
    </div>
  );
};

ReviewInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
