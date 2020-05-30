import React from 'react';
import { Review } from '../cmps/Review'
export const ReviewList = props => (

  <section className="review-list">
    { props.reviews.map(review => {
      return (
        <div>
          
          <Review key={review._id} review={review} />
        </div>

      )
    })}
  </section>
)
