import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';

//Components
import { ReviewAdd } from '../cmps/ReviewAdd';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';

class _BookingPage extends Component {
  state = {
    guide: {
      _id: '1234',
      userName: 'poiki123',
      password: '1234',
      fullName: 'shoka koko',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
      rating: 3.5,
      reviewers_count: 30,
      isAdmin: false,
      languages: ['he', 'en'],
      trails: [
        {
          _id: 'fg3d',
          name: 'Sahara desert',
          imgUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Banias_river_%2849%29.jpg/1200px-Banias_river_%2849%29.jpg',
            'https://res.cloudinary.com/liorapi/image/upload/v1590070000/sprint4/yvtt1dfnp45l4h9e1z3u.jpg',
          ],
        },
      ], // id, name, country
    },
    user: {
      _id: '312312',
      fullName: 'Gabi Bubu',

    },
  }

  componentDidMount() {
    // const { id } = this.props.match.params;

  }

  render() {
    const { guide, user } = this.state;
    return (
      <main className="booking-page">
        <img className="booking-page-img" src={guide.imgUrl} width="75px" />
        <p>{guide.fullName}</p>
        <div className="booking-page-rate">
          <p>Rating:</p>
          <Rating
            start={0}
            stop={5}
            initialRating={guide.rating}
            emptySymbol={<img src={star} width="30" />}
            fullSymbol={<img src={star_o} width="30" />}
            readonly
          />
          <p>(By {guide.reviewers_count} reviewers)</p>
        </div>
        <img src={guide.trails[0].imgUrls[0]} width="100px" />
        <img src={guide.trails[0].imgUrls[1]} width="100px" />
        <p>need to be here description</p>

        <p>Write a review about {guide.fullName}</p>
        <ReviewAdd user={user} guide={guide} />
      </main>
    );
  }
}

// const mapStateToProps = state => {
//     return {

//     };
//   };
//   const mapDispatchToProps = {

//   };
export const BookingPage = connect()(_BookingPage);
