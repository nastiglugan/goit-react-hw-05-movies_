import PropTypes from 'prop-types';

export const ReviewInfo = ({ results }) => {
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
    </div>
  );
};

ReviewInfo.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};
