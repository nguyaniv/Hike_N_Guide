import React, { Component } from 'react';
import Rating from 'react-rating';
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';

export class Review extends Component {
  render() {
    console.log(this.props.review);
    const wtittenBy = this.props.review.by.fullName;
    const writtedId = this.props.review.by._id;
    console.log(wtittenBy, writtedId);
    const { txt, rate } = this.props.review;


    if (this.props) {
      return (
        <main>
          <div className="review-container">

          <Rating className="trail-preview-rating" start={ 0 }
                stop={ 5 }
                initialRating={ rate }
                emptySymbol={ <img className="trail-preview-full-star" src={ star } alt="star" /> }
                fullSymbol={ <img className="trail-preview-star" src={ star_o } alt="full-star" /> }
                readonly
              />


            <div className="review-name-date">
              <p>created by: {wtittenBy} </p>
            </div>
            <div className="review-msg">
              <p>{txt}</p>
            </div>
          </div>
        </main>
      );
    }

    return (
      <div>
        <h2>no reviews</h2>
      </div>
    );
  }
}
