import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

// services
import userService from '../services/user.service';
import { langCodeToName } from '../services/language.service';

// actions
import { loadReviews } from '../store/actions/reviewActions';

// Components/Pages
import { ReviewAdd } from '../cmps/ReviewAdd';
import { ReviewList } from '../cmps/ReviewList';
import { BookingForm } from '../cmps/BookingForm';

// Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';


class _BookingPage extends Component {
  state = {
    guide: '',
    trailIdx: 0,
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.loadGuide(id);


    const { currTrail } = this.props;
    if (currTrail) {
      const trailIdx = this.state.guide.trails.findIndex(trail => (
        trail._id === currTrail._id));
      if (trailIdx !== -1) this.setState({ trailIdx });
    }

    const reviews = await this.props.loadReviews({ guideId: id });
    this.setState({ reviews });
  }

  setTrailIdx = ev => {
    const { name } = ev.target;
    const value = parseInt(ev.target.value, 10);

    this.setState({ [name]: value });
  }

  loadGuide = id => {
    userService.getById(id)
      .then(guide => {
        this.setState({ guide });
      });
  }

  render() {
    const { guide, trailIdx } = this.state;
    return (
      <main className="booking-page">
        {guide
          && <div className="booking-page-contain">
            <section className="booking-page-content">
              <div className="booking-page-details">
                <img className="booking-page-avatar" alt={ guide.fullName } src={ guide.imgUrl } width="75px" />
                <p className="booking-page-full-name">{guide.fullName}</p>
                <div className="booking-page-rate-box" >
                  <p className="pra-rating">Rating:</p>
                  <Rating
                    start={ 0 }
                    stop={ 5 }
                    initialRating={ guide.rating }
                    emptySymbol={ <img src={ star } alt="star" width="16" /> }
                    fullSymbol={ <img src={ star_o } alt="full-star" width="16" /> }
                    readonly
                  />
                  <p className="total-rating">({guide.reviewers_count})</p>
                </div>
                <div>
                  <p className="booking-page-title">Languages:</p>
                  <p>{guide.languages.map(langCodeToName).join(', ')}</p>
                </div>
                <section>
                  <div>
                    <p>need to be here description</p>
                  </div>
                  <img
                    className="booking-page-img-trail"
                    src={ guide.trails[trailIdx].imgUrls[0] }
                  />
                </section>
              </div>
              <section className="booking-page-add-review">
                <p className="title">Write a review about {guide.fullName}</p>
                {this.props.loggedInUser
                  ? <ReviewAdd guide={ guide } />
                  : <div><Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link> to write your review</div>}
              </section>
            </section>
          <BookingForm guide={guide} setTrailIdx={this.setTrailIdx} trailIdx={trailIdx} />
          </div>}
        {guide && this.state.reviews
          && <ReviewList reviews={ this.props.reviews } />
        }

      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.user.loggedInUser,
  reviews: state.review.review,
  currTrail: state.trail.selectedTrail,
});
const mapDispatchToProps = {
  loadReviews,
};
export const BookingPage = connect(mapStateToProps, mapDispatchToProps)(_BookingPage);
