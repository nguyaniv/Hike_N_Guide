import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

//services
import userService from '../services/user.service'

//Components/Pages
import { ReviewAdd } from '../cmps/ReviewAdd';
import { BookingForm } from '../cmps/BookingForm';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';


class _BookingPage extends Component {
  state = {
    guide: ''
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    const id = '5ecbea3c2f2bd8a771af68b9';
    this.loadGuide(id)

  }

  loadGuide = (id) => {
    userService.getById(id)
      .then(guide => {
        this.setState({ guide })
      })
  }

  render() {
    const { guide, user } = this.state;
    return (
      <main className="booking-page">
        {guide && <React.Fragment>
          <BookingForm />
          <img className="booking-page-img" src={guide.imgUrl} width="75px" />
          <p>{guide.fullName}</p>
          <div className="booking-page-rate">
            <p>Rating:</p>
            <Rating
              start={0}
              stop={5}
              initialRating={guide.rating}
              emptySymbol={<img src={star} width="18" />}
              fullSymbol={<img src={star_o} width="18" />}
              readonly
            />
            <p>(By {guide.reviewers_count} reviewers)</p>
          </div>
          <img src={guide.trails[0].imgUrls[0]} width="100px" />
          <img src={guide.trails[0].imgUrls[1]} width="100px" />
          <p>need to be here description</p>

          <p>Write a review about {guide.fullName}</p>
          {! this.props.loggedInUser
            ? <ReviewAdd guide={guide} />
            : <div><Link>Sign up</Link > or <Link>Log in</Link> to write your comment </div>}
        </React.Fragment>}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,
  };
};
//   const mapDispatchToProps = {

//   };
export const BookingPage = connect(mapStateToProps)(_BookingPage);
