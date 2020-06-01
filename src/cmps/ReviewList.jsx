import React from 'react';
import { Review } from './Review';

export const ReviewList = props => (
<<<<<<< HEAD
<section className="review-list">
  {props.reviews.map(review => (
    < Review key={ review._id } review={ review } />
  ))}
</section>
=======


  <section className="review-list">
    { props.reviews.map(review => (
      <Review key={ review._id } review={ review } getReviewToShow={props.getReviewToShow}/>
    ))}
  </section>
>>>>>>> 74bf077e76c8f96b26c2e69ab178175b1bc6c8b2
);
