import { useState, useEffect } from 'react';
import * as getReviews from '../components/api';
import { useParams } from 'react-router-dom';
import { ReviewInfo } from '../components/ReviewInfo/ReviewInfo';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews.fetchReviews(movieId).then(data => setReviews(data));
  }, [movieId]);
  console.log(reviews);

  return (
    <div>{reviews !== null && <ReviewInfo info={reviews}></ReviewInfo>}</div>
  );
};
