import React from 'react';
import {Review} from '../cmps/Review'
export const ReviewList = props => (
    
    <main className="review-list">
    { props.reviews.map(review => {
              return <Review key={ review._id } review ={review} />;
            }) }
</main>
)