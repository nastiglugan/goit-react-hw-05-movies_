import { useState, useEffect } from 'react';
import * as getReviews from '../components/api';
import { useParams } from 'react-router-dom';
import { ReviewInfo } from '../components/ReviewInfo/ReviewInfo';
import { NoReviews } from '../components/ReviewInfo/ReviewInfo.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews.fetchReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewInfo results={reviews}></ReviewInfo>
      ) : (
        <NoReviews>This movie hasn't reviews yet</NoReviews>
      )}
    </div>
  );
};

export default Reviews;
