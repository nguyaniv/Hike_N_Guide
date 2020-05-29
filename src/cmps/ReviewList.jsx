import React from 'react';
import { Review } from './Review';

export const ReviewList = props => (

    <main>
    {/* {console.log(props)} */}
    <h2>helloooo</h2>
    { props.reviews.map(review => <Review key={ review._id } review ={ review } />) }
</main>
);
