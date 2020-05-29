import React from 'react';
import { Review } from '../cmps/Review'
export const ReviewList = props => (

  <section className="review-list">



    { props.reviews.map(review => {



      return (
        <div>
          {console.log(props)
          }
          <Review key={review._id} review={review} />
        </div>

      )
    })}
  </section>
)





//  {props && props.reviews.map(review => {



//       return (
//         <div>
//           {console.log(props.trail)
//           }
//           <Review key={review._id} review={review} />;
//         </div>

//       )
//     })}