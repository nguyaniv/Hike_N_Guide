import React from 'react';
import {Review} from '../cmps/Review'
export const ReviewList = props => (
    
    <main>
    {console.log(props)}
    <h2>helloooo</h2>
    { props.reviews.map(review => {
              return <Review key={ review._id } review ={review} />;
            }) }
</main>
)