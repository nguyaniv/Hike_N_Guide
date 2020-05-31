/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
//services
import userService from '../services/user.service';
import { langCodeToName } from '../services/language.service';

//actions
import { loadReviews } from '../store/actions/reviewActions';

//Components/Pages
import { ReviewAdd } from '../cmps/ReviewAdd';
import { ReviewList } from '../cmps/ReviewList';
import { BookingForm } from '../cmps/BookingForm';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';


class _BookingPage extends Component {
  state = {
    guide: '',
    bookForm: {
      trailSelected: 0,
      peopleCount: 1,
      date: new Date(),
    },
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.loadGuide(id);
    //review load

    const reviews = await this.props.loadReviews({ guideId: id });
    this.setState({ reviews }, () => {
      console.log(this.props.reviews);
    });
  }

  loadGuide = id => {
    userService.getById(id)
      .then(guide => {
        this.setState({ guide });
      });
  }

  handelInput = ev => {
    const { name } = ev.target;
    const value = ev.target.type === 'number' ? parseInt(ev.target.value, 10) : ev.target.value;

    this.setState(prevState => ({ bookForm: { ...prevState.bookForm, [name]: value } }),
      () => { console.log('state:', this.state); });
  }

  handelDate = date => {
    this.setState(prevState => ({ bookForm: { ...prevState.bookForm, date } }),
      () => { console.log('state:', this.state); });
  }

  onBook = ev => {
    ev.preventDefault();
    // const order = this.state
  }

  render() {
    const { guide, bookForm } = this.state;
    return (
      <main className="booking-page">
        {guide
          && <div className="booking-page-container">
            <section className="booking-page-content">
              <div className="booking-page-details">
                <img className="booking-page-avatar" alt={ guide.fullName } src={ guide.imgUrl } width="75px" />
                <p className="booking-page-full-name">{guide.fullName}</p>
                <p className="booking-page-rate-box" >
                  <span className="pra-rating">Rating:</span>
                  <Rating
                    start={ 0 }
                    stop={ 5 }
                    initialRating={ guide.rating }
                    emptySymbol={ <img src={ star } alt="star" width="16" /> }
                    fullSymbol={ <img src={ star_o } alt="full-star" width="16" /> }
                    readonly
                  />
                  <p className="total-rating">({guide.reviewers_count})</p>
                </p>
                <div>
                  <span className="booking-page-title">Languages:</span>
                  <span>{guide.languages.map(langCodeToName).join(', ')}</span>
                </div>
                <section>
                  <div>
                    <p className="booking-page-description">
                      I’ve traveled to over 100 countries and territories, traveled hundreds of thousands of miles, slept in over a thousand hostels, tried weird food (including fried maggots), made lifelong friends, learned multiple languages, and, most importantly, made it my mission now to help travelers like YOURSELF to realize YOUR travel dreams the same way those five backpackers helped me realize mine.
                    </p>
                  </div>
                  <img
                    className="booking-page-img-trail"
                    alt={ guide.trails[bookForm.trailSelected].name }
                    src={ guide.trails[bookForm.trailSelected].imgUrls[0] }
                  />
                </section>
              </div>
              <section className="booking-page-add-review">
                <p className="title">Write a review about {guide.fullName}</p>
                {this.props.loggedInUser
                  ? <ReviewAdd guide={ guide } />
                  : <div><Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link> to write your review</div>}
                {guide && this.state.reviews
                  && <ReviewList reviews={ this.props.reviews } />
                }
              </section>
            </section>
            <BookingForm
              price={ this.state.guide.prise }
              trails={ this.state.guide.trails }
              handelInput={ this.handelInput }
              bookForm={ this.state.bookForm }
              handelDate={ this.handelDate }
              onBook={ this.onBook }
             />
          </div>
        }
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.user.loggedInUser,
  reviews: state.review.review,

});
const mapDispatchToProps = {
  loadReviews,
};
export const BookingPage = connect(mapStateToProps, mapDispatchToProps)(_BookingPage);
