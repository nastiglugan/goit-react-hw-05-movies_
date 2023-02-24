import { useState, useEffect } from 'react';
import * as getCredits from '../components/api';
import { useParams } from 'react-router-dom';
import { CastList } from '../components/CastList/CastList';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits.fetchCredits(movieId).then(data => setActors(data));
  }, [movieId]);

  return <div>{actors !== null && <CastList actors={actors}></CastList>}</div>;
};
