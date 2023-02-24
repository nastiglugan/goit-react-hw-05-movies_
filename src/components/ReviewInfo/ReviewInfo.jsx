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
    </div>
  );
};
