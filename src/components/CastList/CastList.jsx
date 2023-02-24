export const CastList = ({ actors }) => {
  const { cast } = actors;
  return (
    <div>
      {actors !== null && (
        <ul>
          {cast.map(actor => {
            return (
            //   <li>
            //     <img
            //       src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            //       alt={actor.name}
            //       width="470"
            //       height="600"
            //     />
            //   </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
